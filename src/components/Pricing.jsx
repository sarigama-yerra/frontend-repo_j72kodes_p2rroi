export default function Pricing() {
  const tiers = [
    { name: 'Novice', price: 'Free', desc: 'Basic logging', features: ['Workout logger', 'History & notes'] },
    { name: 'Athlete', price: '$14/mo', desc: 'AI Coaching & Analytics', features: ['Auto progression', 'Biometric sync', 'Advanced analytics'] },
    { name: 'Human Weapon', price: '$99/mo', desc: '1-on-1 Coaching access', features: ['Elite coach access', 'Custom macro cycles', 'Priority support'] },
  ];

  return (
    <section id="pricing" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Pricing</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i)=> (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6">
              <div className="text-slate-300 text-sm">{t.name}</div>
              <div className="mt-2 text-3xl font-extrabold text-white">{t.price}</div>
              <div className="text-slate-400 text-sm">{t.desc}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {t.features.map((f, idx)=> (
                  <li key={idx} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-emerald-500 text-slate-900 font-semibold py-2.5">Start</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
