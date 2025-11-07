"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  text: string
  speed?: number
  startDelay?: number
  onComplete?: () => void
  loop?: boolean
  loopDelay?: number
}

export function TypingAnimation({
  text,
  speed = 50,
  startDelay = 0,
  onComplete,
  loop = false,
  loopDelay = 3000,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const delayTimeout = setTimeout(
      () => {
        if (displayedText.length < text.length) {
          const timer = setTimeout(() => {
            setDisplayedText(text.slice(0, displayedText.length + 1))
          }, speed)

          return () => clearTimeout(timer)
        } else if (displayedText.length === text.length && !isComplete) {
          setIsComplete(true)
          onComplete?.()

          if (loop) {
            const resetTimer = setTimeout(() => {
              setDisplayedText("")
              setIsComplete(false)
            }, loopDelay)
            return () => clearTimeout(resetTimer)
          }
        }
      },
      displayedText.length === 0 ? startDelay : 0,
    )

    return () => clearTimeout(delayTimeout)
  }, [displayedText, text, speed, startDelay, isComplete, onComplete, loop, loopDelay])

  return (
    <span>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  )
}
