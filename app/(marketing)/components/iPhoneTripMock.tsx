const trips = [
  {
    fromTitle: 'Frankfurt Airport Center',
    fromSubtitle: 'Frankfurt am Main',
    toTitle: 'Neuendorfer Str. 3',
    toSubtitle: 'Koblenz-Lützel',
    amount: '187 €',
  },
  {
    fromTitle: 'Neustraße 2',
    fromSubtitle: 'Koblenz',
    toTitle: 'Köln Bonn Airport',
    toSubtitle: 'Köln',
    amount: '92 €',
  },
  {
    fromTitle: 'Köln Bonn Airport',
    fromSubtitle: 'Köln',
    toTitle: 'Deutsche Bank SB-Stelle',
    toSubtitle: 'Düsseldorf',
    amount: '245 €',
  },
  {
    fromTitle: 'Deutsche Bank SB-Stelle',
    fromSubtitle: 'Düsseldorf',
    toTitle: 'Straßburger Str.',
    toSubtitle: 'Wuppertal-Elberfeld',
    amount: '156 €',
  },
]

import React from 'react'

export default function iPhoneTripMock(): React.ReactElement {
  return (
    <div className="relative mx-auto max-w-xs w-full min-w-[280px]">
      <div className="relative rounded-[2.4rem] border-2 border-white/30 bg-slate-950 px-3 pt-4 pb-5 shadow-2xl shadow-black/60 min-h-[500px]">
        {/* Notch */}
        <div className="mx-auto mb-3 h-6 w-24 rounded-full bg-slate-800/80" />

        {/* Phone Header & Search */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-100">Alle Firmenfahrten</span>
          <span className="text-xs text-slate-500">🔍</span>
        </div>

        <div className="mb-3 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-[11px] text-slate-400 flex items-center gap-2">
          <span className="text-xs text-slate-500">🔍</span>
          <span className="truncate">Adresse, Fahrer, Kunde suchen</span>
        </div>

        {/* Trip List */}
        <div className="mt-1 space-y-2">
          {trips.map((trip, index) => (
            <div
              key={index}
              className="rounded-xl bg-slate-900/80 border border-slate-800/80 px-3 py-2.5 text-[11px] text-slate-100 flex gap-3"
            >
              <div className="flex-1 space-y-1">
                <div>
                  <div className="font-medium text-slate-100">{trip.fromTitle}</div>
                  <div className="text-[10px] text-slate-400">{trip.fromSubtitle}</div>
                </div>
                <div className="h-px w-8 bg-slate-700/80 my-0.5" />
                <div>
                  <div className="font-medium text-slate-100">{trip.toTitle}</div>
                  <div className="text-[10px] text-slate-400">{trip.toSubtitle}</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xs font-semibold text-emerald-300">{trip.amount}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-4 border-t border-slate-800/80 pt-2">
          <nav className="flex items-center justify-between text-[10px] text-slate-400">
            {/* Home */}
            <button className="flex flex-col items-center gap-1 flex-1 text-emerald-300">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path
                  d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-medium">Home</span>
            </button>

            {/* GPS */}
            <button className="flex flex-col items-center gap-1 flex-1">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path d="M20.992,9.98A8.991,8.991,0,0,0,3.01,9.932a13.95,13.95,0,0,0,8.574,12.979A1,1,0,0,0,12,23a1.012,1.012,0,0,0,.419-.09A13.948,13.948,0,0,0,20.992,9.98ZM12,20.9A11.713,11.713,0,0,1,5.008,10a6.992,6.992,0,1,1,13.984,0c0,.021,0,.045,0,.065A11.7,11.7,0,0,1,12,20.9ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z" />
              </svg>
              <span>GPS</span>
            </button>

            {/* Car */}
            <button className="flex flex-col items-center gap-1 flex-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path
                  d="M3 8L5.72187 10.2682C5.90158 10.418 6.12811 10.5 6.36205 10.5H17.6379C17.8719 10.5 18.0984 10.418 18.2781 10.2682L21 8M6.5 14H6.51M17.5 14H17.51M8.16065 4.5H15.8394C16.5571 4.5 17.2198 4.88457 17.5758 5.50772L20.473 10.5777C20.8183 11.1821 21 11.8661 21 12.5623V18.5C21 19.0523 20.5523 19.5 20 19.5H19C18.4477 19.5 18 19.0523 18 18.5V17.5H6V18.5C6 19.0523 5.55228 19.5 5 19.5H4C3.44772 19.5 3 19.0523 3 18.5V12.5623C3 11.8661 3.18166 11.1821 3.52703 10.5777L6.42416 5.50772C6.78024 4.88457 7.44293 4.5 8.16065 4.5ZM7 14C7 14.2761 6.77614 14.5 6.5 14.5C6.22386 14.5 6 14.2761 6 14C6 13.7239 6.22386 13.5 6.5 13.5C6.77614 13.5 7 13.7239 7 14ZM18 14C18 14.2761 17.7761 14.5 17.5 14.5C17.2239 14.5 17 14.2761 17 14C17 13.7239 17.2239 13.5 17.5 13.5C17.7761 13.5 18 13.7239 18 14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Car</span>
            </button>

            {/* Payment */}
            <button className="flex flex-col items-center gap-1 flex-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <rect
                  x="3"
                  y="6"
                  width="18"
                  height="13"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 10H20.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 15H9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Payment</span>
            </button>

            {/* Profil */}
            <button className="flex flex-col items-center gap-1 flex-1">
              <svg
                fill="currentColor"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
              </svg>
              <span>Profil</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

