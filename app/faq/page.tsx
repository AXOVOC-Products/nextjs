"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

const faqCategories = [
  {
    title: "Fundamentals of VO₂ max",
    questions: [
      { q: "What is VO₂ max?", a: "VO₂ Max is the maximum amount of oxygen your body can use during intense exercise. It’s one of the most accurate indicators of your cardiovascular fitness and endurance capacity." },
      { q: "Why is VO₂ max important?", a: "Because it predicts both performance and healthspan. A higher VO₂ Max means better endurance, faster recovery, and even a lower risk of chronic disease and early mortality." },
      { q: "Can VO₂ Max be increased?", a: "Absolutely. With the right training—especially interval workouts, endurance sessions, and progressive overload—you can improve your VO₂ Max and overall aerobic capacity over time." },
      { q: "Which exercises increase VO₂ Max?", a: `The most effective exercises include:
        - High-intensity interval training (HIIT)
        - Long steady-state cardio (running, cycling, rowing)
        - Zone 2 aerobic training
        - Sprint intervals with short recovery` },
      { q: "How is VO₂ Max calculated?", a: "In labs, it’s measured by analyzing how much oxygen you inhale and how much carbon dioxide you exhale during exercise. Most wearables estimate it using heart rate and pace, but direct gas analysis is far more accurate—which is what Vortex is built for." },
      { q: "Why is my VO₂ Max going down?", a: "VO₂ Max can decline due to reduced activity, overtraining, poor recovery, illness, aging, or stress. Tracking it regularly helps you identify what’s affecting your fitness—and fix it early." },
      { q: "Can VO₂ Max be measured at home?", a: "Yes, but only with the right tools. Most wearables estimate VO₂ Max using indirect data, but devices like Vortex will soon let you measure it directly at home—with lab-grade accuracy." },
    ]
  },
  {
    title: "Why Vortex?",
    questions: [
      { q: "How is Vortex different from a smartwatch or fitness tracker?", a: "Most smartwatches estimate VO₂ Max using heart rate and pace. Vortex directly analyzes your breath to provide lab-grade accuracy and deeper insights—like metabolic efficiency and recovery capacity." },
      { q: "What biomarkers does Vortex measure?", a: `Vortex measures key performance and health biomarkers, including:
        - VO₂ Max
        - Resting metabolic rate
        - Ventilatory threshold
        - Oxygen uptake efficiency
        - Recovery and fatigue trends (via breath analysis + HR data)` },
      { q: "Is Vortex safe and suitable for older adults or non-athletes?", a: "Yes. Vortex is built for both performance and longevity. Whether you're training hard or simply staying healthy for your family, it provides meaningful, low-effort insights tailored to your goals." },
      { q: "Do I need a mask or special equipment to use it?", a: "No bulky lab gear required. Vortex uses a compact, wearable sensor that makes testing quick, clean, and repeatable—right from home or the gym." },
      { q: "Will it give me training suggestions?", a: "Yes. Vortex doesn’t just collect data—it helps you act on it. You’ll get personalized recommendations based on your VO₂ Max, aerobic threshold, and recovery patterns."},
      { q: "How often should I use it?", a: "You can test as often as you like. Most users measure 1–2 times per week to monitor changes and optimize their training or health routines."},
      { q: "How does Vortex work?", a: "Vortex is built on the same physiological principles used in clinical VO₂ testing and sports science labs. Our team includes experts in physiology, engineering, and human performance."},
    ]
  },
  {
    title: "Pre-Order Clarity",
    questions: [
      { q: "When will Axovoc ship?", a: "We’re currently accepting pre-orders. All you need to do is register with us with your email without making any payments. We expect to begin shipping in third quarter of 2026. Early adopters will get first access and exclusive perks." },
    ]
  }
]

export default function FAQPage() {
  const [query, setQuery] = useState("")

  const filteredCategories = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return faqCategories
    
    // Normalize text for more flexible searching
    const normalizeText = (text: string) => {
      return text
        .toLowerCase()
        .replace(/₂/g, '2')  // Convert subscript 2 to regular 2
        .replace(/[^\w\s]/g, '')  // Remove special characters except letters, numbers, spaces
        .replace(/\s+/g, ' ')  // Normalize multiple spaces to single space
        .trim()
    }
    
    return faqCategories.map(category => ({
      ...category,
      questions: category.questions.filter(item => {
        const normalizedQuery = normalizeText(q)
        const normalizedQuestion = normalizeText(item.q)
        const normalizedAnswer = normalizeText(item.a)
        
        return normalizedQuestion.includes(normalizedQuery) || 
               normalizedAnswer.includes(normalizedQuery)
      })
    })).filter(category => category.questions.length > 0)
  }, [query])

  const totalQuestions = filteredCategories.reduce((sum, cat) => sum + cat.questions.length, 0)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h1>
      <p className="text-gray-600 mb-8">Find quick answers to the most common questions about VO₂ max and Vortex.</p>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search FAQs"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        {query && (
          <p className="text-sm text-gray-500 mt-2">
            Found {totalQuestions} question{totalQuestions !== 1 ? 's' : ''} matching "{query}"
          </p>
        )}
      </div>

      <div className="space-y-12">
        {filteredCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-2">
              {category.title}
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              {category.questions.map((item, questionIndex) => (
                <AccordionItem key={questionIndex} value={`${categoryIndex}-${questionIndex}`}>
                  <AccordionTrigger className="text-left">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No results found for "{query}"</p>
          <p className="text-gray-400 text-sm mt-2">Try searching with different keywords</p>
        </div>
      )}
    </div>
  )
}