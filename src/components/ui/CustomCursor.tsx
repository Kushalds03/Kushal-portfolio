import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Spring physics for buttery smooth motion
  const springConfig = { damping: 25, stiffness: 280 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    // Detect touch-only device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement | null
      if (target) {
        const interactiveEl = target.closest('a, button, [data-cursor], input, textarea, [role="button"]')
        if (interactiveEl) {
          setIsPointer(true)
          const customText = interactiveEl.getAttribute('data-cursor') || ''
          setCursorText(customText)
        } else {
          setIsPointer(false)
          setCursorText('')
        }
      }
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [mouseX, mouseY, isVisible])

  if (isTouchDevice || !isVisible) return null

  return (
    <>
      {/* Outer Luminous Ring / Halo */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#ff442b]/60 flex items-center justify-center font-mono text-[9px] uppercase tracking-widest text-white backdrop-blur-[1px]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: isPointer ? (cursorText ? 72 : 46) : 32,
          height: isPointer ? (cursorText ? 72 : 46) : 32,
          backgroundColor: isPointer ? 'rgba(255, 51, 68, 0.18)' : 'rgba(255, 119, 0, 0.05)',
          boxShadow: isPointer ? '0 0 25px rgba(255, 60, 40, 0.45)' : 'none'
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {cursorText && (
          <span className="font-semibold text-[10px] tracking-wider text-amber-300 drop-shadow">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precise Laser Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#ff3344] shadow-[0_0_10px_#ff3344]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: isPointer ? 6 : 5,
          height: isPointer ? 6 : 5
        }}
      />
    </>
  )
}
