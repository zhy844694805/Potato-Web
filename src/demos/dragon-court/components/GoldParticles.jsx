import { useEffect, useRef } from 'react'

function GoldParticles() {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const sparklesRef = useRef([])
  const animationRef = useRef()
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Track mouse for interactive effects
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      // Create sparkles on mouse move
      if (Math.random() > 0.7) {
        sparklesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 30,
          y: e.clientY + (Math.random() - 0.5) * 30,
          size: Math.random() * 4 + 2,
          life: 1,
          decay: 0.02 + Math.random() * 0.02
        })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Create main floating particles - increased count
    const createParticles = () => {
      const particles = []
      const particleCount = Math.min(120, Math.floor(canvas.width * canvas.height / 15000))

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 1,
          speedY: -Math.random() * 0.6 - 0.2,
          speedX: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.7 + 0.2,
          glow: Math.random() > 0.5,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          // Dragon trail particles
          isDragonTrail: i < 20,
          angle: (i / 20) * Math.PI * 2,
          radius: 100 + Math.random() * 100,
          orbitSpeed: 0.005 + Math.random() * 0.005
        })
      }
      return particles
    }
    particlesRef.current = createParticles()

    // Dragon center point that moves slowly
    let dragonCenter = {
      x: canvas.width / 2,
      y: canvas.height / 3,
      targetX: canvas.width / 2,
      targetY: canvas.height / 3,
      time: 0
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update dragon center position with smooth sine wave movement
      dragonCenter.time += 0.01
      dragonCenter.targetX = canvas.width / 2 + Math.sin(dragonCenter.time) * 200
      dragonCenter.targetY = canvas.height / 3 + Math.cos(dragonCenter.time * 0.7) * 100
      dragonCenter.x += (dragonCenter.targetX - dragonCenter.x) * 0.02
      dragonCenter.y += (dragonCenter.targetY - dragonCenter.y) * 0.02

      // Draw connecting lines between nearby particles (constellation effect)
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.1)'
      ctx.lineWidth = 0.5
      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 80 && !p1.isDragonTrail && !p2.isDragonTrail) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.globalAlpha = (1 - dist / 80) * 0.3
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        })
      })

      // Draw main particles
      particlesRef.current.forEach(p => {
        // Update pulse
        p.pulse += p.pulseSpeed
        const pulseFactor = 1 + Math.sin(p.pulse) * 0.3

        if (p.isDragonTrail) {
          // Dragon orbit particles
          p.angle += p.orbitSpeed
          p.x = dragonCenter.x + Math.cos(p.angle) * p.radius
          p.y = dragonCenter.y + Math.sin(p.angle * 0.5) * p.radius * 0.5
          p.opacity = 0.4 + Math.sin(p.angle * 3) * 0.3
        } else {
          // Regular floating particles
          p.y += p.speedY
          p.x += p.speedX
          p.opacity += (Math.random() - 0.5) * 0.01

          if (p.y < -10) {
            p.y = canvas.height + 10
            p.x = Math.random() * canvas.width
          }
          if (p.x < -10) p.x = canvas.width + 10
          if (p.x > canvas.width + 10) p.x = -10
          if (p.opacity < 0.1) p.opacity = 0.3
          if (p.opacity > 0.9) p.opacity = 0.7
        }

        const currentSize = p.size * pulseFactor

        // Multi-layer gold gradient for more depth
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentSize * 3)
        gradient.addColorStop(0, `rgba(255, 223, 100, ${p.opacity})`)
        gradient.addColorStop(0.3, `rgba(212, 175, 55, ${p.opacity * 0.8})`)
        gradient.addColorStop(0.6, `rgba(184, 150, 12, ${p.opacity * 0.4})`)
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0)')

        ctx.beginPath()
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Enhanced glow effect
        if (p.glow) {
          ctx.shadowBlur = 20 * pulseFactor
          ctx.shadowColor = 'rgba(255, 215, 0, 0.6)'
          ctx.fill()
          ctx.shadowBlur = 0
        }

        // Star sparkle effect for some particles
        if (p.glow && Math.sin(p.pulse * 2) > 0.7) {
          ctx.save()
          ctx.translate(p.x, p.y)
          ctx.rotate(p.pulse)
          ctx.strokeStyle = `rgba(255, 255, 200, ${p.opacity * 0.8})`
          ctx.lineWidth = 1
          // Draw 4-point star
          for (let i = 0; i < 4; i++) {
            ctx.rotate(Math.PI / 2)
            ctx.beginPath()
            ctx.moveTo(0, 0)
            ctx.lineTo(0, currentSize * 3)
            ctx.stroke()
          }
          ctx.restore()
        }
      })

      // Draw mouse sparkles
      sparklesRef.current = sparklesRef.current.filter(s => s.life > 0)
      sparklesRef.current.forEach(s => {
        s.life -= s.decay
        s.size *= 0.98

        const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 2)
        gradient.addColorStop(0, `rgba(255, 255, 200, ${s.life})`)
        gradient.addColorStop(0.5, `rgba(255, 215, 0, ${s.life * 0.5})`)
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0)')

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      // Draw subtle dragon aura around center
      const auraGradient = ctx.createRadialGradient(
        dragonCenter.x, dragonCenter.y, 0,
        dragonCenter.x, dragonCenter.y, 300
      )
      auraGradient.addColorStop(0, 'rgba(212, 175, 55, 0.05)')
      auraGradient.addColorStop(0.5, 'rgba(184, 150, 12, 0.02)')
      auraGradient.addColorStop(1, 'rgba(212, 175, 55, 0)')

      ctx.beginPath()
      ctx.arc(dragonCenter.x, dragonCenter.y, 300, 0, Math.PI * 2)
      ctx.fillStyle = auraGradient
      ctx.fill()

      animationRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="dc-particles" />
}

export default GoldParticles
