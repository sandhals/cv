"use client"

import type React from "react"
import Header from "@/components/Header.tsx"  // Add this line
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import "./styles.css"

function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      requestAnimationFrame(() => {
        if (glow) {
          glow.style.transform = `translate(${clientX - 500}px, ${clientY - 500}px)`
        }
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
      <div ref={glowRef} className="mouse-glow" />
  )
}

export default function Home() {
  const [sliderIndex, setSliderIndex] = useState(0)

  const descriptions = [
"Copywriter.",
"I write copy.",
"I write breakthrough copy.",
"I write breakthrough copy for breakthrough brands.",
"I give breakthrough brands their breakthrough voice.",
"All breakthroughs need breakthrough copy. I find you that voice.",
"Every breakthrough needs breakthrough copy. I find voices for ambitious brands.",
"Every breakthrough deserves breakthrough copy. I craft distinct voices for ambitious brands.",
"Every breakthrough deserves breakthrough copy. I craft distinctive brand voices for ambitious companies.",
"Every breakthrough deserves breakthrough copy. I craft distinctive brand voices that make ambitious companies impossible to ignore.",
"Every breakthrough deserves breakthrough copy. I craft distinctive brand voices that make ambitious companies impossible to ignore or imitate."
  ]


  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderIndex(Number.parseInt(e.target.value))
  }

  return (
    <main className="container">
      <MouseGlow />

<Header currentPage="home" />

      <div className="content">
        <div className="column">
          <div className="section">
            <h3 className="section-title">About</h3>
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={sliderIndex}
                onChange={handleSliderChange}
                className="slider"
              />
            </div>
            <div className="description">{descriptions[sliderIndex]}</div>
          </div>
        </div>

        <div className="column">
          <h3 className="section-title">Selected clients</h3>
          <ul className="client-list">
            <li className="client olive">Olive Young</li>
            <li className="client samsung">Samsung Electronics</li>
            <li className="client lg">LG Corporation</li>
            <li className="client pledis">Pledis Entertainment</li>
            <li className="client amore">Amorepacific</li>
            <li className="client hyundai">Hyundai Genesis</li>
            <li className="client krafton">Krafton Inc.</li>
            <li className="client fc">FC Online</li>
            <li className="client kia">KIA</li>
          </ul>
        </div>

        <div className="column">
          <h3 className="section-title">Contact</h3>
          <ul className="publication-list">
            <li>brixton@protonmail.com</li>
          </ul>
        </div>
      </div>

      <div className="work-fields">
        <div className="section">
          <h3 className="section-title">Fields of work</h3>
        </div>
        <h2 className="work-fields-title">
          Transcreation,
          <br />
          Naming & Slogans,
          <br />
          Verbal Identity,
          <br />
          Tone of Voice.
        </h2>
      </div>
    </main>
  )
}
