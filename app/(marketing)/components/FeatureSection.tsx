import React from 'react'
import { fahrlyCopy } from '../fahrlyCopy'
import iPhoneTripMock from './iPhoneTripMock'
import { ESignatureMock } from './ESignatureMock'
import { GehaltsrechnerMock } from './GehaltsrechnerMock'
import { FahrerUebersichtMock } from './FahrerUebersichtMock'

// Type assertion to fix TypeScript error
const TripMock = iPhoneTripMock as React.ComponentType

export default function FeatureSection() {
  return (
    <section id="features" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        {/* Features Intro */}
        <div className="text-center mb-16">
          <div className="text-sm text-slate-400 uppercase tracking-wider mb-4">
            {fahrlyCopy.featuresIntro.eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
            {fahrlyCopy.featuresIntro.title}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {fahrlyCopy.featuresIntro.body}
          </p>
        </div>

        {/* Feature Items */}
        <div className="space-y-24">
          {fahrlyCopy.features.map((feature, index) => {
            const isFirstFeature = index === 0
            const isGehaltsrechnerFeature = index === 1
            const isFahrerUebersichtFeature = index === 2
            const isESignatureFeature = index === 3

            // Custom layout: Index 1 & 3 have visual left, text right
            // Index 2 has text left, visual right
            const textOnRight = isGehaltsrechnerFeature || isESignatureFeature
            const visualOnLeft = isGehaltsrechnerFeature || isESignatureFeature

            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  visualOnLeft ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* Text Content */}
                <div className={textOnRight ? 'md:col-start-2' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-4">
                    {feature.subtitle}
                  </p>
                  <p className="text-base text-slate-400 mb-4">
                    {feature.outcome}
                  </p>
                  <a
                    href="#pricing"
                    className="text-slate-300 hover:text-slate-100 text-sm font-medium"
                  >
                    {feature.linkLabel}
                  </a>
                </div>

                {/* Visual Mock */}
                <div
                  className={
                    isFirstFeature
                      ? 'flex items-center justify-center md:justify-end'
                      : visualOnLeft
                        ? 'md:col-start-1 md:row-start-1'
                        : ''
                  }
                >
                  {isFirstFeature ? (
                    <TripMock />
                  ) : isGehaltsrechnerFeature ? (
                    <GehaltsrechnerMock />
                  ) : isFahrerUebersichtFeature ? (
                    <FahrerUebersichtMock />
                  ) : isESignatureFeature ? (
                    <ESignatureMock />
                  ) : (
                    <div className="h-64 md:h-80 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/80 to-black/80" />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

