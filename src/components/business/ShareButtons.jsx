import { useState, useCallback } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import './ShareButtons.css'

const SHARE_COUNTS = {
  twitter: 128,
  linkedin: 67,
  facebook: 89,
  wechat: 234
}

const LABELS = {
  zh: {
    twitter: '分享到 Twitter',
    linkedin: '分享到 LinkedIn',
    facebook: '分享到 Facebook',
    wechat: '分享到微信',
    copied: '链接已复制!',
    share: '分享'
  },
  en: {
    twitter: 'Share on Twitter',
    linkedin: 'Share on LinkedIn',
    facebook: 'Share on Facebook',
    wechat: 'Share on WeChat',
    copied: 'Link copied!',
    share: 'Share'
  },
  it: {
    twitter: 'Condividi su Twitter',
    linkedin: 'Condividi su LinkedIn',
    facebook: 'Condividi su Facebook',
    wechat: 'Condividi su WeChat',
    copied: 'Link copiato!',
    share: 'Condividi'
  }
}

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const WeChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.032zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
  </svg>
)

function ShareButtons({ url, title, description, showCounts = false }) {
  const { language } = useLanguage()
  const [copied, setCopied] = useState(false)
  const [activeTooltip, setActiveTooltip] = useState(null)

  const labels = LABELS[language] || LABELS.en

  const openShareWindow = useCallback((platform) => {
    const encodedUrl = encodeURIComponent(url)
    const encodedText = encodeURIComponent(`${title}${description ? ` - ${description}` : ''}`)

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    }

    const shareUrl = shareUrls[platform]
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400,noopener,noreferrer')
    }
  }, [url, title, description])

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = url
      textArea.style.position = 'fixed'
      textArea.style.opacity = '0'
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [url])

  const handleMouseEnter = (platform) => {
    setActiveTooltip(platform)
  }

  const handleMouseLeave = () => {
    setActiveTooltip(null)
  }

  const renderIcon = (id) => {
    switch (id) {
      case 'twitter': return <TwitterIcon />
      case 'linkedin': return <LinkedInIcon />
      case 'facebook': return <FacebookIcon />
      case 'wechat': return <WeChatIcon />
      default: return null
    }
  }

  const platforms = [
    { id: 'twitter', label: labels.twitter, action: () => openShareWindow('twitter') },
    { id: 'linkedin', label: labels.linkedin, action: () => openShareWindow('linkedin') },
    { id: 'facebook', label: labels.facebook, action: () => openShareWindow('facebook') },
    { id: 'wechat', label: labels.wechat, action: copyToClipboard }
  ]

  return (
    <div className="share-buttons">
      <span className="share-label">{labels.share}</span>
      <div className="share-buttons-list">
        {platforms.map(({ id, label, action }) => (
          <button
            key={id}
            type="button"
            className={`share-button share-button--${id}`}
            onClick={action}
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={handleMouseLeave}
            aria-label={label}
          >
            {renderIcon(id)}
            {showCounts && (
              <span className="share-count">{SHARE_COUNTS[id]}</span>
            )}
            {activeTooltip === id && (
              <span className="share-tooltip">
                {id === 'wechat' && copied ? labels.copied : label}
              </span>
            )}
          </button>
        ))}
      </div>
      {copied && (
        <div className="share-toast" role="alert">
          {labels.copied}
        </div>
      )}
    </div>
  )
}

export default ShareButtons
