/*
 * brain.js
 *
 * This script procedurally generates a futuristic brain made up of glowing
 * nodes connected by luminous lines. It uses three.js to render the
 * point/line network and provides functions to highlight specific brain
 * regions. Each region corresponds loosely to major anatomical structures
 * (amygdala, prefrontal cortex, basal ganglia, cingulate cortex, frontal
 * lobe, cerebellum and the entire brain). The brain can be interacted
 * with via clicking topic labels at the bottom of the page. A scroll
 * listener highlights regions sequentially as the viewer scrolls the page.
 *
 * Copyright © 2025
 */

// Immediately invoked function to avoid polluting the global namespace
(function() {
  // Retrieve container element where the renderer will attach
  const container = document.getElementById('brainContainer');

  // Create scene, camera and renderer
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 30);
  camera.lookAt(0, 0, 0);

  // Variables for smooth camera movement when highlighting brain regions. The
  // camera will tween towards `targetCameraPos` and look at `targetLookAt`.
  const targetCameraPos = new THREE.Vector3(0, 0, 30);
  const targetLookAt    = new THREE.Vector3(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Pointer-based rotation support. We implement simple drag rotation since
  // OrbitControls isn't available locally. Users can click and drag to
  // rotate the brain. When no dragging occurs the brain slowly revolves.
  let isDragging = false;
  let previousMouse = { x: 0, y: 0 };
  const rotationVelocity = { x: 0, y: 0 };
  function onPointerDown(event) {
    isDragging = true;
    previousMouse.x = event.clientX;
    previousMouse.y = event.clientY;
  }
  function onPointerMove(event) {
    if (!isDragging) return;
    const dx = event.clientX - previousMouse.x;
    const dy = event.clientY - previousMouse.y;
    previousMouse.x = event.clientX;
    previousMouse.y = event.clientY;
    // Update rotation velocity based on drag distance
    rotationVelocity.y = dx * 0.002;
    rotationVelocity.x = dy * 0.002;
  }
  function onPointerUp() {
    isDragging = false;
  }
  renderer.domElement.addEventListener('pointerdown', onPointerDown);
  renderer.domElement.addEventListener('pointermove', onPointerMove);
  renderer.domElement.addEventListener('pointerup', onPointerUp);

  // Define arrays to hold node positions, colours and region assignments
  // Arrays to hold node positions and region assignments. We will store
  // positions flat (x,y,z,x,y,z,…) and a parallel array of region indices.
  const positions = [];
  const regionIds = [];

  // Define colours used for the base network and highlighted nodes. Base
  // nodes are dark blue and semi‑transparent while highlighted nodes are
  // bright cyan. These can be tweaked to taste.
  const baseColour = new THREE.Color(0x0055aa);
  const highlightColour = new THREE.Color(0x00ffff);

  /**
   * Determines the anatomical region for a given node. This function
   * approximates coarse locations of neural structures within the brain
   * ellipsoids. Returns an integer between 0 and 5 inclusive, where
   * 0: Amygdala (Fear)
   * 1: Prefrontal Cortex (Self‑Perception)
   * 2: Basal Ganglia (Habits)
   * 3: Cingulate Cortex (Society)
   * 4: Frontal Lobe (Mindset)
   * 5: Cerebellum (Skillset)
   */
  function assignRegion(x, y, z, isCerebellum) {
    if (isCerebellum) return 5;
    // Prefrontal Cortex (1) – frontal and superior. This test comes first so
    // that it takes precedence over the general frontal lobe region (4).
    if (y > 2 && z < -1) {
      return 1;
    }
    // Amygdala (0) – bottom central part of the temporal lobe. Expanded bounds
    // ensure a sizeable cluster near the base of the hemispheres.
    if (Math.abs(x) < 3 && y < -1 && z > -3 && z < 3) {
      return 0;
    }
    // Basal Ganglia (2) – deep and central. Restricted to a small box around
    // the brain's midline to represent habitual behaviours.
    if (Math.abs(x) < 2 && y > -1 && y < 2 && Math.abs(z) < 1.5) {
      return 2;
    }
    // Cingulate Cortex (3) – medial and slightly superior. Expanded across
    // more of the midline so the cluster is visible.
    if (Math.abs(x) < 3 && y > 0 && Math.abs(z) < 4) {
      return 3;
    }
    // Frontal Lobe (4) – everything towards the front that is not already
    // classified as prefrontal. Serves as a catch‑all for mindset region.
    if (z < -1) {
      return 4;
    }
    // Default to basal ganglia when none of the regions match
    return 2;
  }

  /**
   * Generates random points within an ellipsoid defined by semi-axes
   * radii (ax, ay, az). If `hemisphere` is -1 or 1, x-values will be
   * forced negative or positive respectively. Offsets allow moving
   * the ellipsoid to different locations. Region assignments depend
   * on the point's location within the main brain versus the cerebellum.
   */
  function sampleEllipsoid(count, ax, ay, az, hemisphere, offsetX = 0, offsetY = 0, offsetZ = 0, isCerebellum = false) {
    for (let i = 0; i < count; i++) {
      // Generate a random direction on the unit sphere
      let u = Math.random() * 2 - 1;
      let v = Math.random() * 2 - 1;
      let w = Math.random() * 2 - 1;
      const mag = Math.sqrt(u*u + v*v + w*w);
      u /= mag; v /= mag; w /= mag;
      // Bias radial distance towards outer surface (makes points more surface-like)
      const r = 0.82 + 0.18 * Math.pow(Math.random(), 0.75);
      let x = u * ax * r;
      let y = v * ay * r;
      let z = w * az * r;
      // Force hemisphere direction on x axis if specified
      if (hemisphere !== 0) x = Math.abs(x) * hemisphere;
      // Apply offsets (for cerebellum placement)
      x += offsetX;
      y += offsetY;
      z += offsetZ;
      positions.push(x, y, z);
      // Determine region index based on coordinates
      const region = assignRegion(x, y, z, isCerebellum);
      regionIds.push(region);
    }
  }

  // Generate hemispheres and cerebellum
  // The hemispheres are wide (x), moderately tall (y) and slightly shallower (z)
  // relative to height. Values are tuned by eye to resemble an organic brain
  // shape. We sample more points on each hemisphere to create a dense mesh.
  const hemisphereCount = 300;
  // left hemisphere
  sampleEllipsoid(hemisphereCount, 6.2, 5.0, 4.5, -1);
  // right hemisphere
  sampleEllipsoid(hemisphereCount, 6.2, 5.0, 4.5, 1);
  // Cerebellum – smaller, tucked beneath and behind the hemispheres. We offset
  // upwards slightly in Z (posterior) and down in Y (inferior). The shape is
  // more flattened (b smaller) and has fewer nodes than hemispheres.
  sampleEllipsoid(160, 3.2, 2.0, 2.8, 0, 0, -4.5, 4.0, true);

  const numNodes = regionIds.length;

  // Build connectivity: connect each node to its k nearest neighbours.
  const kNeighbours = 3;
  const edges = [];
  // Precompute an array of vectors for distance calculations
  const nodeVectors = [];
  for (let i = 0; i < numNodes; i++) {
    nodeVectors.push(new THREE.Vector3(
      positions[i*3],
      positions[i*3+1],
      positions[i*3+2]
    ));
  }
  for (let i = 0; i < numNodes; i++) {
    const distances = [];
    const v1 = nodeVectors[i];
    for (let j = 0; j < numNodes; j++) {
      if (i === j) continue;
      const v2 = nodeVectors[j];
      const dist = v1.distanceToSquared(v2);
      distances.push({ index: j, dist });
    }
    distances.sort((a, b) => a.dist - b.dist);
    for (let n = 0; n < kNeighbours; n++) {
      const neighbourIndex = distances[n].index;
      // store both endpoints of the line
      edges.push(i, neighbourIndex);
    }
  }

  // Create buffer geometry for base nodes. All nodes share the same colour and
  // opacity so we do not need per‑vertex colours.
  const baseGeometry = new THREE.BufferGeometry();
  baseGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  const baseMaterial = new THREE.PointsMaterial({
    color: baseColour,
    size: 0.15,
    transparent: true,
    opacity: 0.35,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const basePoints = new THREE.Points(baseGeometry, baseMaterial);
  scene.add(basePoints);

  // Geometry and material for highlighted nodes. This geometry will be
  // dynamically updated to contain the positions of nodes belonging to
  // whatever brain region is selected. Its opacity is higher and size
  // slightly larger to make highlighted nodes pop against the base layer.
  const highlightGeometry = new THREE.BufferGeometry();
  // Start with an empty position attribute; will be filled in highlightRegion()
  highlightGeometry.setAttribute('position', new THREE.Float32BufferAttribute([], 3));
  const highlightMaterial = new THREE.PointsMaterial({
    color: highlightColour,
    size: 0.28,
    transparent: true,
    opacity: 1.0,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const highlightPoints = new THREE.Points(highlightGeometry, highlightMaterial);
  scene.add(highlightPoints);

  // Build buffer geometry for lines
  const linePositions = new Float32Array(edges.length * 3 * 2 / 2); // will adjust fill below
  // We'll fill the line positions array from edges: each edge defines two vertex positions
  // At index 0..edges.length*3-1 we will store lines positions (two vertices per edge)
  const lineVertices = [];
  for (let i = 0; i < edges.length; i += 2) {
    const idx1 = edges[i];
    const idx2 = edges[i + 1];
    const v1 = nodeVectors[idx1];
    const v2 = nodeVectors[idx2];
    lineVertices.push(v1.x, v1.y, v1.z);
    lineVertices.push(v2.x, v2.y, v2.z);
  }
  const linesGeometry = new THREE.BufferGeometry();
  linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(lineVertices, 3));

  // Material for lines: faint luminous blue lines
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x0077cc,
    transparent: true,
    opacity: 0.4,
    blending: THREE.AdditiveBlending
  });
  const linesMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
  scene.add(linesMesh);

  // Create a star field background: small points scattered far away
  (function createStarField() {
    const starCount = 800;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const radius = 60 + 20 * Math.random();
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      starPositions[i*3] = x;
      starPositions[i*3+1] = y;
      starPositions[i*3+2] = z;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0x224466, size: 0.2, sizeAttenuation: true, transparent: true, opacity: 0.7 });
    const starPoints = new THREE.Points(starGeometry, starMaterial);
    scene.add(starPoints);
  })();

  /**
   * Highlights a particular brain region. This function computes a new
   * positions array containing only the nodes that belong to the selected
   * region (or all nodes when regionId is 6) and updates the highlight
   * geometry. The base node layer remains static underneath. Larger node
   * size and higher opacity on the highlight layer ensure it stands out.
   * @param {number} regionId - Region index (0–6 inclusive)
   */
  function highlightRegion(regionId) {
    const highlightPositions = [];
    for (let i = 0; i < numNodes; i++) {
      if (regionId === 6 || regionIds[i] === regionId) {
        highlightPositions.push(
          positions[i*3],
          positions[i*3 + 1],
          positions[i*3 + 2]
        );
      }
    }
    // Update the highlight geometry with new positions
    highlightGeometry.setAttribute('position', new THREE.Float32BufferAttribute(highlightPositions, 3));
    highlightGeometry.computeBoundingSphere();

    // Compute centroid of highlighted nodes to focus the camera. If no
    // positions are highlighted (which shouldn’t happen) fall back to
    // world origin. The camera target will be updated smoothly in the
    // animation loop.
    let center = new THREE.Vector3(0, 0, 0);
    const count = highlightPositions.length / 3;
    if (count > 0) {
      let sx = 0, sy = 0, sz = 0;
      for (let i = 0; i < highlightPositions.length; i += 3) {
        sx += highlightPositions[i];
        sy += highlightPositions[i + 1];
        sz += highlightPositions[i + 2];
      }
      center.set(sx / count, sy / count, sz / count);
    }
    // Determine camera distance; maintain a fixed distance of 30 units along
    // the z‑axis relative to the region centre. This keeps the brain in view.
    targetLookAt.copy(center);
    targetCameraPos.set(center.x, center.y, center.z + 30);
  }

  // Expose highlightRegion globally for HTML interaction
  window.highlightRegion = highlightRegion;

  // Handle clicking of topic labels
  document.getElementById('topics').addEventListener('click', function(ev) {
    const target = ev.target;
    if (target && target.dataset && target.dataset.region) {
      const idx = parseInt(target.dataset.region, 10);
      highlightRegion(idx);
    }
  });

  // Scroll-based highlighting: as the user scrolls, we determine which region
  // should be illuminated based on scroll progress. This encourages readers
  // to traverse the entire page to reveal all regions.
  window.addEventListener('scroll', function() {
    const scrollFraction = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const region = Math.min(6, Math.floor(scrollFraction * 7));
    highlightRegion(region);
  });

  // Adjust canvas size on window resize
  window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Animation loop: rotates the brain slowly for visual appeal and updates
  // controls. The rotation is subtle to mimic a floating hologram.
  function animate() {
    requestAnimationFrame(animate);
    // Apply a gentle rotation around the y-axis
    // Rotate all brain components gently around the y‑axis (and x when dragging)
    basePoints.rotation.y += 0.0015;
    highlightPoints.rotation.y += 0.0015;
    linesMesh.rotation.y += 0.0015;
    // Apply rotation from user drag; gradually reduce over time for a smooth stop
    if (!isDragging) {
      rotationVelocity.x *= 0.98;
      rotationVelocity.y *= 0.98;
    }
    basePoints.rotation.x += rotationVelocity.x;
    basePoints.rotation.y += rotationVelocity.y;
    highlightPoints.rotation.x += rotationVelocity.x;
    highlightPoints.rotation.y += rotationVelocity.y;
    linesMesh.rotation.x += rotationVelocity.x;
    linesMesh.rotation.y += rotationVelocity.y;
    // Smoothly interpolate camera position and orientation towards the target
    camera.position.lerp(targetCameraPos, 0.05);
    camera.lookAt(targetLookAt);
    renderer.render(scene, camera);
  }

  // Start with the whole brain highlighted by default
  highlightRegion(6);
  animate();

})();