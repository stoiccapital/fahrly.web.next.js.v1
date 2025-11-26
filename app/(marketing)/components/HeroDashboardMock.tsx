const metrics = [
  { label: 'Fahrer', value: '35' },
  { label: 'Fahrzeuge', value: '30' },
  { label: 'Fahrten heute', value: '421' },
  { label: 'Einnahme heute', value: '4.582,10 €' },
]

const lastRides = [
  { date: '18. November', name: 'Ibrahim', amount: '45,20 €' },
  { date: '18. November', name: 'Ahmed', amount: '72,50 €' },
  { date: '18. November', name: 'Mohammed', amount: '28,90 €' },
  { date: '18. November', name: 'Hassan', amount: '65,30 €' },
  { date: '18. November', name: 'Ayman', amount: '38,60 €' },
]

export function HeroDashboardMock() {
  return (
    <div className="relative w-full max-w-md mx-auto rounded-2xl bg-slate-900/60 border border-white/10 shadow-xl shadow-black/40 p-4 sm:p-5 backdrop-blur">
      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2.5 flex flex-col gap-1"
          >
            <div className="text-xs text-slate-400">{metric.label}</div>
            <div className="text-lg sm:text-xl font-semibold text-slate-50 tracking-tight">
              {metric.value}
            </div>
          </div>
        ))}
      </div>

      {/* Last Rides Table Panel */}
      <div className="mt-2 rounded-xl border border-white/10 bg-slate-900/80 p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-semibold text-slate-200">Letzte Fahrt</div>
        </div>
        <div className="space-y-1.5">
          {/* Header row */}
          <div className="flex items-center text-[11px] uppercase tracking-wide text-slate-500 pb-1">
            <div className="w-24">Datum</div>
            <div className="flex-1">Name</div>
            <div className="w-20 text-right">Einnahme</div>
          </div>
          {/* Data rows */}
          {lastRides.map((ride, index) => (
            <div
              key={index}
              className="flex items-center text-xs text-slate-200/90 rounded-lg px-1 py-1 hover:bg-slate-800/70 transition-colors"
            >
              <div className="w-24 text-slate-400">{ride.date}</div>
              <div className="flex-1">{ride.name}</div>
              <div className="w-20 text-right font-medium text-emerald-300">
                {ride.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

