export default function ProblemStrip() {
  const items = [
    { title: 'Fragmented Data', desc: 'Lifts in one app, sleep in another, nutrition in a third.' },
    { title: 'Plateauing Lifts', desc: 'No structured progression. Guesswork stalls your gains.' },
    { title: 'Generic Plans', desc: 'Cookie-cutter programs that ignore your biometrics.' },
  ];

  return (
    <section className="relative" aria-labelledby="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6">
              <div className="text-sm text-emerald-400/90 font-semibold">{it.title}</div>
              <p className="mt-2 text-slate-300/90 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
