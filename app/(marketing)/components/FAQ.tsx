'use client'

import { useState } from 'react'
import { fahrlyCopy } from '../fahrlyCopy'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="text-sm text-slate-400 uppercase tracking-wider mb-4">
            {fahrlyCopy.faqIntro.eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            {fahrlyCopy.faqIntro.title}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {fahrlyCopy.faqItems.map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/5 bg-slate-900/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold text-slate-100 pr-4">
                  {faq.question}
                </h3>
                <span className="text-slate-400 text-2xl flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <p className="text-slate-300 leading-relaxed mt-4">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

