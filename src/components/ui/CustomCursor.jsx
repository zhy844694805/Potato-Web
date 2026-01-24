import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './CustomCursor.css'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const cursorInnerRef = useRef(null)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Hide cursor on touch devices
    if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setHidden(true)
      return
    }

    const cursor = cursorRef.current
    const cursorInner = cursorInnerRef.current
    
    if (!cursor || !cursorInner) return

    const moveCursor = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      cursorInner.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    }
    
    const clickStart = () => setClicked(true)
    const clickEnd = () => setClicked(false)

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, .clickable, input, textarea, select, [role="button"]').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHovered(true))
        el.addEventListener('mouseout', () => setLinkHovered(false))
      })
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', clickStart)
    window.addEventListener('mouseup', clickEnd)
    
    // Initial binding
    handleLinkHoverEvents()

    // Re-bind when location changes (new content loaded)
    const observer = new MutationObserver(handleLinkHoverEvents)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', clickStart)
      window.removeEventListener('mouseup', clickEnd)
      observer.disconnect()
    }
  }, [location])

  if (hidden) return null

  return (
    <>
      <div 
        ref={cursorRef} 
        className={`cursor-outer ${clicked ? 'cursor-clicked' : ''} ${linkHovered ? 'cursor-hovered' : ''}`} 
      />
      <div 
        ref={cursorInnerRef} 
        className={`cursor-inner ${clicked ? 'cursor-clicked' : ''} ${linkHovered ? 'cursor-hovered' : ''}`} 
      />
    </>
  )
}
