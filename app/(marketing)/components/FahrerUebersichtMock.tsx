const drivers = [
  { name: 'Ibrahim', umsatz: '2.450 €', stunden: '32', fahrten: '120', rate: '3,75' },
  { name: 'Ahmed', umsatz: '2.780 €', stunden: '38', fahrten: '145', rate: '3,82' },
  { name: 'Mohammed', umsatz: '2.120 €', stunden: '28', fahrten: '110', rate: '3,93' },
  { name: 'Hassan', umsatz: '2.650 €', stunden: '35', fahrten: '140', rate: '4,00' },
  { name: 'Ayman', umsatz: '2.310 €', stunden: '30', fahrten: '125', rate: '4,17' },
]

export function FahrerUebersichtMock() {
  return (
    <div className="relative mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-slate-950/80 p-4 sm:p-5 shadow-xl shadow-black/50 backdrop-blur">
      {/* Header */}
      <h3 className="mb-4 text-sm font-semibold text-slate-50">Fahrer-Übersicht</h3>

      {/* Table Header */}
      <div className="mb-2 flex items-center text-[11px] uppercase tracking-wide text-slate-500">
        <div className="flex-1">Name</div>
        <div className="w-24 text-right">Umsatz</div>
        <div className="w-20 text-right">Stunden</div>
        <div className="w-20 text-right">Fahrten</div>
        <div className="w-28 text-right">Fahrten/Stunde</div>
      </div>

      {/* Table Rows */}
      <div className="space-y-1.5">
        {drivers.map((row) => (
          <div
            key={row.name}
            className="flex items-center rounded-lg bg-slate-900/60 border border-slate-800/80 px-3 py-2 text-xs text-slate-100"
          >
            <div className="flex-1">{row.name}</div>
            <div className="w-24 text-right font-medium text-emerald-300">{row.umsatz}</div>
            <div className="w-20 text-right text-slate-300">{row.stunden}</div>
            <div className="w-20 text-right text-slate-300">{row.fahrten}</div>
            <div className="w-28 text-right text-slate-300">{row.rate}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

