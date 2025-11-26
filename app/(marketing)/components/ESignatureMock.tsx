export function ESignatureMock() {
  return (
    <div className="relative mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-slate-950/80 p-4 sm:p-5 shadow-xl shadow-black/50 backdrop-blur">
      {/* Header Section */}
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-slate-50">Arbeitsvertrag</h3>
        <p className="mt-1 text-xs text-slate-400">zwischen Mietwagen GmbH und Mohammed</p>
      </div>

      {/* Body Placeholder */}
      <div className="space-y-1.5 mb-4">
        <div className="h-1.5 rounded-full bg-slate-800/80 w-full" />
        <div className="h-1.5 rounded-full bg-slate-800/80 w-11/12" />
        <div className="h-1.5 rounded-full bg-slate-800/80 w-10/12" />
        <div className="h-1.5 rounded-full bg-slate-800/80 w-9/12" />
      </div>

      {/* Date Line */}
      <p className="mb-3 text-[11px] text-slate-400">Datum: 18. November 2025</p>

      {/* Signature Block */}
      <div className="mt-4 border-t border-slate-800/80 pt-3">
        <div className="flex items-end justify-between gap-4">
          <div className="flex-1">
            <p className="text-[11px] text-slate-500 mb-1">Unterschrift</p>
            <div className="rounded-md border border-slate-700/80 bg-slate-900/80 px-3 py-2">
              <span className="text-sm font-medium text-slate-100 italic">Mohammed</span>
            </div>
          </div>
          {/* Status Pill */}
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-300 border border-emerald-500/40">
            E-Signatur abgeschlossen
          </span>
        </div>
      </div>
    </div>
  )
}

