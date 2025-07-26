'use client'

import { motion } from 'framer-motion'
import { Instagram, Youtube } from 'lucide-react'

// Custom TikTok Icon since it's not in lucide-react
const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.321 5.562a5.123 5.123 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.457-1.95-1.457-3.138C16.284.654 15.63 0 14.884 0h-3.201c-.747 0-1.35.654-1.35 1.462v9.723c0 1.369-1.114 2.483-2.483 2.483s-2.483-1.114-2.483-2.483 1.114-2.483 2.483-2.483c.263 0 .518.041.756.117V5.562a6.228 6.228 0 0 0-.756-.082C3.485 5.48 0 8.965 0 13.331s3.485 7.851 7.851 7.851 7.851-3.485 7.851-7.851V8.697c1.045.639 2.266 1.008 3.572 1.008V6.504c-.747 0-1.451-.258-2.006-.669-.555-.411-.947-.923-.947-1.548z"/>
  </svg>
)

export default function SocialLinks() {
  console.log("SocialLinks component loaded")

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_manuelmeyer_?igsh=MXkwemNwM21kcGZ2&utm_source=qr',
      icon: <Instagram size={20} />
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@_manuelmeyer?_t=ZN-8yIBmkhziac&_r=1',
      icon: <TikTokIcon />
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@manuelmeyer370?si=adfI8AkhNsKfPism',
      icon: <Youtube size={20} />
    }
  ]

  const handleSocialClick = (name: string, url: string) => {
    console.log(`Clicked ${name} - Opening:`, url)
    
    try {
      // Direct redirect without any window.open to bypass Cross-Origin-Policy
      window.location.href = url
    } catch (error) {
      console.error('Error opening social link:', error)
      // If that fails, try creating a temporary link
      try {
        const link = document.createElement('a')
        link.href = url
        link.click()
      } catch (fallbackError) {
        console.error('Fallback failed too:', fallbackError)
      }
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col gap-3">
        {socialLinks.map((social, index) => (
          <motion.button
            key={social.name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => handleSocialClick(social.name, social.url)}
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
            title={social.name}
          >
            <div className="group-hover:scale-110 transition-transform duration-300">
              {social.icon}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}