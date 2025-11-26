const salaries = [
  { name: 'Ibrahim', percent: '45%', salary: '3.240 €' },
  { name: 'Ahmed', percent: '48%', salary: '3.680 €' },
  { name: 'Mohammed', percent: '42%', salary: '2.850 €' },
  { name: 'Hassan', percent: '50%', salary: '3.950 €' },
  { name: 'Ayman', percent: '44%', salary: '3.120 €' },
]

export function GehaltsrechnerMock() {
  return (
    <div className="relative mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-slate-950/80 p-4 sm:p-5 shadow-xl shadow-black/50 backdrop-blur">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-50">Gehaltsübersicht</h3>
        <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-400">
          Monatlich
        </span>
      </div>

      {/* Table Header */}
      <div className="mb-2 flex items-center text-[11px] uppercase tracking-wide text-slate-500">
        <div className="flex-1">Name</div>
        <div className="w-12 text-right">%</div>
        <div className="w-24 text-right">Gehalt</div>
      </div>

      {/* Data Rows */}
      <div className="space-y-1.5">
        {salaries.map((row) => (
          <div
            key={row.name}
            className="flex items-center rounded-lg px-2 py-1.5 text-xs text-slate-100 bg-slate-900/60 border border-slate-800/80"
          >
            <div className="flex-1 text-slate-100">{row.name}</div>
            <div className="w-12 text-right text-slate-300">{row.percent}</div>
            <div className="w-24 text-right font-semibold text-emerald-300">{row.salary}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-3 text-[11px] text-slate-500">
        Anteile basieren auf Fahrerumsatz &amp; Fixgehalt.
      </p>
    </div>
  )
}

