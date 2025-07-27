/*
 * brain.js
 *
 * Dieses Skript erzeugt ein futuristisches 3D‑Gehirn aus leuchtenden Punkten
 * und Linien. Beim Klicken auf einen Themenbegriff wird der entsprechende
 * Bereich hervorgehoben und der Besucher nach kurzer Zeit auf eine
 * Unterseite weitergeleitet. Die Datei ist vollständig clientseitig und
 * benötigt nur die Three.js‑Bibliothek. Alle Assets liegen im Ordner
 * "docs" deines Repositories.
 */

(function() {
  const container = document.getElementById('brainContainer');
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 30);
  camera.lookAt(0, 0, 0);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  // Variables for camera tweening
  const targetCameraPos = new THREE.Vector3(0, 0, 30);
  const targetLookAt    = new THREE.Vector3(0, 0, 0);
  // Arrays to hold node positions and region IDs
  const positions = [];
  const regionIds = [];
  const baseColour = new THREE.Color(0x0055aa);
  const highlightColour = new THREE.Color(0x00ffff);

  // Region mapping to page names for navigation
  const regionPages = [
    'fear.html',           // 0: Fear
    'self-perception.html',// 1: Self‑Perception
    'habits.html',         // 2: Habits
    'society.html',        // 3: Society
    'mindset.html',        // 4: Mindset
    'skillset.html',       // 5: Skillset
    'success.html'         // 6: Success (whole brain)
  ];

  // Region assignment function (same as zuvor mit erweiterten Bereichen)
  function assignRegion(x, y, z, isCerebellum) {
    if (isCerebellum) return 5;
    if (y > 2 && z < -1) return 1;                         // Prefrontal
    if (Math.abs(x) < 3 && y < -1 && z > -3 && z < 3) return 0; // Amygdala
    if (Math.abs(x) < 2 && y > -1 && y < 2 && Math.abs(z) < 1.5) return 2; // Basal
    if (Math.abs(x) < 3 && y > 0 && Math.abs(z) < 4) return 3; // Cingulate
    if (z < -1) return 4; // Frontal
    return 2;
  }

  function sampleEllipsoid(count, ax, ay, az, hemisphere, offx=0, offy=0, offz=0, cereb=false) {
    for (let i=0; i<count; i++) {
      let u = Math.random()*2 - 1;
      let v = Math.random()*2 - 1;
      let w = Math.random()*2 - 1;
      const mag = Math.sqrt(u*u + v*v + w*w);
      u/=mag; v/=mag; w/=mag;
      const r = 0.82 + 0.18*Math.pow(Math.random(), 0.75);
      let x = u*ax*r;
      let y = v*ay*r;
      let z = w*az*r;
      if (hemisphere!==0) x = Math.abs(x)*hemisphere;
      x+=offx; y+=offy; z+=offz;
      positions.push(x,y,z);
      regionIds.push(assignRegion(x,y,z,cereb));
    }
  }
  // Generate hemispheres and cerebellum
  const hemisphereCount = 300;
  sampleEllipsoid(hemisphereCount, 6.2, 5.0, 4.5, -1);
  sampleEllipsoid(hemisphereCount, 6.2, 5.0, 4.5, 1);
  sampleEllipsoid(160, 3.2, 2.0, 2.8, 0, 0, -4.5, 4.0, true);
  const numNodes = regionIds.length;
  // Build neighbour edges
  const nodeVectors = [];
  for (let i=0; i<numNodes; i++) {
    nodeVectors.push(new THREE.Vector3(positions[i*3], positions[i*3+1], positions[i*3+2]));
  }
  const edges = [];
  const kNeighbours = 3;
  for (let i=0; i<numNodes; i++) {
    const v1 = nodeVectors[i];
    const distArr = [];
    for (let j=0; j<numNodes; j++) {
      if (i===j) continue;
      const v2 = nodeVectors[j];
      distArr.push({ index: j, dist: v1.distanceToSquared(v2) });
    }
    distArr.sort((a,b) => a.dist - b.dist);
    for (let n=0; n<kNeighbours; n++) {
      edges.push(i, distArr[n].index);
    }
  }
  // Base points geometry
  const baseGeometry = new THREE.BufferGeometry();
  baseGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  const baseMaterial = new THREE.PointsMaterial({ color: baseColour, size: 0.15, transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending });
  const basePoints = new THREE.Points(baseGeometry, baseMaterial);
  scene.add(basePoints);
  // Highlight points geometry
  const highlightGeometry = new THREE.BufferGeometry();
  highlightGeometry.setAttribute('position', new THREE.Float32BufferAttribute([], 3));
  const highlightMaterial = new THREE.PointsMaterial({ color: highlightColour, size: 0.28, transparent: true, opacity: 1.0, depthWrite: false, blending: THREE.AdditiveBlending });
  const highlightPoints = new THREE.Points(highlightGeometry, highlightMaterial);
  scene.add(highlightPoints);
  // Lines
  const lineVertices = [];
  for (let i=0; i<edges.length; i+=2) {
    const idx1 = edges[i];
    const idx2 = edges[i+1];
    lineVertices.push(nodeVectors[idx1].x, nodeVectors[idx1].y, nodeVectors[idx1].z);
    lineVertices.push(nodeVectors[idx2].x, nodeVectors[idx2].y, nodeVectors[idx2].z);
  }
  const linesGeometry = new THREE.BufferGeometry();
  linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(lineVertices, 3));
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0077cc, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending });
  const linesMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
  scene.add(linesMesh);
  // Stars
  (function createStars() {
    const starCount = 800;
    const starPos = new Float32Array(starCount*3);
    for (let i=0; i<starCount; i++) {
      const radius = 60 + 20*Math.random();
      const theta = Math.random()*Math.PI*2;
      const phi = Math.acos(2*Math.random()-1);
      starPos[i*3]   = radius * Math.sin(phi) * Math.cos(theta);
      starPos[i*3+1] = radius * Math.sin(phi) * Math.sin(theta);
      starPos[i*3+2] = radius * Math.cos(phi);
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(starPos,3));
    const sm = new THREE.PointsMaterial({ color: 0x224466, size: 0.2, transparent: true, opacity: 0.7 });
    const sp = new THREE.Points(sg, sm);
    scene.add(sp);
  })();
  // Highlight region function
  function highlightRegion(regionId) {
    const highlightPositions = [];
    for (let i=0; i<numNodes; i++) {
      if (regionId === 6 || regionIds[i] === regionId) {
        highlightPositions.push(positions[i*3], positions[i*3+1], positions[i*3+2]);
      }
    }
    highlightGeometry.setAttribute('position', new THREE.Float32BufferAttribute(highlightPositions, 3));
    highlightGeometry.computeBoundingSphere();
    // Compute centroid to focus camera
    let center = new THREE.Vector3(0,0,0);
    const count = highlightPositions.length/3;
    if (count>0) {
      let sx=0, sy=0, sz=0;
      for (let i=0; i<highlightPositions.length; i+=3) {
        sx += highlightPositions[i];
        sy += highlightPositions[i+1];
        sz += highlightPositions[i+2];
      }
      center.set(sx/count, sy/count, sz/count);
    }
    targetLookAt.copy(center);
    targetCameraPos.set(center.x, center.y, center.z + 30);
  }
  window.highlightRegion = highlightRegion;
  // Click handler for topics: highlight region and navigate
  document.getElementById('topics').addEventListener('click', function(ev) {
    const target = ev.target;
    if (target && target.dataset && target.dataset.region) {
      const idx = parseInt(target.dataset.region, 10);
      highlightRegion(idx);
      // Nach 1 Sekunde zur passenden Unterseite navigieren
      setTimeout(() => {
        const page = regionPages[idx];
        if (page) {
          window.location.href = page;
        }
      }, 1000);
    }
  });
  // Handle scroll: optional highlight based on scroll position
  window.addEventListener('scroll', function() {
    const frac = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const regionIndex = Math.min(6, Math.floor(frac * 7));
    highlightRegion(regionIndex);
  });
  // Resize handler
  window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  // Drag rotation
  let isDragging = false;
  let prevMouse = {x:0,y:0};
  const rotVel = {x:0,y:0};
  function onDown(e) { isDragging=true; prevMouse.x=e.clientX; prevMouse.y=e.clientY; }
  function onMove(e) {
    if (!isDragging) return;
    const dx = e.clientX - prevMouse.x;
    const dy = e.clientY - prevMouse.y;
    prevMouse.x = e.clientX;
    prevMouse.y = e.clientY;
    rotVel.y = dx * 0.002;
    rotVel.x = dy * 0.002;
  }
  function onUp() { isDragging=false; }
  renderer.domElement.addEventListener('pointerdown', onDown);
  renderer.domElement.addEventListener('pointermove', onMove);
  renderer.domElement.addEventListener('pointerup', onUp);
  function animate() {
    requestAnimationFrame(animate);
    // Slow automatic rotation
    basePoints.rotation.y += 0.0015;
    highlightPoints.rotation.y += 0.0015;
    linesMesh.rotation.y += 0.0015;
    if (!isDragging) {
      rotVel.x *= 0.98;
      rotVel.y *= 0.98;
    }
    basePoints.rotation.x += rotVel.x;
    basePoints.rotation.y += rotVel.y;
    highlightPoints.rotation.x += rotVel.x;
    highlightPoints.rotation.y += rotVel.y;
    linesMesh.rotation.x += rotVel.x;
    linesMesh.rotation.y += rotVel.y;
    // Camera tweening
    camera.position.lerp(targetCameraPos, 0.05);
    camera.lookAt(targetLookAt);
    renderer.render(scene, camera);
  }
  highlightRegion(6);
  animate();
})();