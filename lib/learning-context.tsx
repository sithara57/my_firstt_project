"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type LearningLevel = "middle-school" | "high-school"
type Language = "en" | "es"

interface LearningContextType {
  level: LearningLevel
  setLevel: (level: LearningLevel) => void
  language: Language
  setLanguage: (language: Language) => void
  speak: (text: string) => void
  stopSpeaking: () => void
}

const LearningContext = createContext<LearningContextType | undefined>(undefined)

export function LearningProvider({ children }: { children: ReactNode }) {
  const [level, setLevel] = useState<LearningLevel>("middle-school")
  const [language, setLanguage] = useState<Language>("en")
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    // Load preferences from localStorage
    const savedLevel = localStorage.getItem("learning-level") as LearningLevel
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLevel) setLevel(savedLevel)
    if (savedLanguage) setLanguage(savedLanguage)
  }, [])

  useEffect(() => {
    // Save preferences to localStorage
    localStorage.setItem("learning-level", level)
  }, [level])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      // Stop any ongoing speech
      window.speechSynthesis.cancel()

      const newUtterance = new SpeechSynthesisUtterance(text)
      newUtterance.lang = language === "es" ? "es-ES" : "en-US"
      newUtterance.rate = 0.9
      setUtterance(newUtterance)
      window.speechSynthesis.speak(newUtterance)
    }
  }

  const stopSpeaking = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel()
    }
  }

  return (
    <LearningContext.Provider value={{ level, setLevel, language, setLanguage, speak, stopSpeaking }}>
      {children}
    </LearningContext.Provider>
  )
}

export function useLearning() {
  const context = useContext(LearningContext)
  if (!context) {
    throw new Error("useLearning must be used within a LearningProvider")
  }
  return context
}
