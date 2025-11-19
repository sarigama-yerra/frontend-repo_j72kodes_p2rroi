import { ArrowRight } from 'lucide-react';

const trainers = [
  { id: 1, name: 'Ava Mitchell', tag: 'Powerlifting' },
  { id: 2, name: 'Noah Carter', tag: 'Hypertrophy' },
  { id: 3, name: 'Mia Rodriguez', tag: 'Olympic WL' },
  { id: 4, name: 'Leo Kim', tag: 'Cross-Performance' },
  { id: 5, name: 'Zoe Patel', tag: 'Endurance' },
  { id: 6, name: 'Jax Nguyen', tag: 'Body Recomp' },
];

export default function Marketplace() {
  return (
    <section className="relative" aria-labelledby="coaches">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Hire the World’s Best Coaches.</h2>
            <p className="text-slate-300 mt-2">Curated experts with real-world results across strength and performance.</p>
          </div>
          <a href="#marketplace" className="hidden sm:inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition">
            Explore Marketplace <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-8 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 min-w-max">
            {trainers.map(t => (
              <div key={t.id} className="w-64 shrink-0 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-4">
                <div className="flex items-center gap-3">
                  <img src={`https://i.pravatar.cc/160?img=${t.id+20}`} alt={t.name} className="w-12 h-12 rounded-full"/>
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.tag}</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-emerald-400 text-sm font-medium">5.0 ★★★★★</span>
                  <button className="text-sm px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-900 font-semibold">Hire</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
