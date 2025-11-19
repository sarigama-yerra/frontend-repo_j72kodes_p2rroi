import { Dumbbell, Activity, HeartPulse, TrendingUp, Star } from 'lucide-react';

export default function FeaturesBento() {
  return (
    <section id="features" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-6 gap-6">
          <div className="md:col-span-3 rounded-3xl bg-slate-900/60 border border-white/10 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-emerald-400" />
              <h3 className="text-white font-semibold">Progressive Overload Engine</h3>
            </div>
            <p className="mt-3 text-slate-300">AI that knows when you need to lift heavier.</p>
            <div className="mt-6 h-36 flex items-end gap-2">
              {[30,40,50,65,80,95].map((h,i)=> (
                <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-emerald-500/20 to-emerald-500/80" style={{height: `${h}%`}} />
              ))}
            </div>
          </div>

          <div className="md:col-span-2 rounded-3xl bg-slate-900/60 border border-white/10 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <HeartPulse className="text-indigo-400" />
              <h3 className="text-white font-semibold">Active Recovery</h3>
            </div>
            <p className="mt-3 text-slate-300">Data-driven rest days based on your biometrics.</p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-300">
              <div className="rounded-xl border border-white/10 p-3">Apple Health ✓</div>
              <div className="rounded-xl border border-white/10 p-3">Whoop ✓</div>
              <div className="rounded-xl border border-white/10 p-3">Oura ✓</div>
              <div className="rounded-xl border border-white/10 p-3">Garmin ✓</div>
            </div>
          </div>

          <div className="md:col-span-1 rounded-3xl bg-slate-900/60 border border-white/10 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Activity className="text-indigo-400" />
              <h3 className="text-white font-semibold">Nutrition Auto-Pilot</h3>
            </div>
            <p className="mt-3 text-slate-300">Macro targets that adapt in real-time.</p>
            <div className="mt-4 relative">
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-500 to-emerald-500 mx-auto"/>
              <div className="mt-2 text-center text-xs text-slate-400">C 45% • P 35% • F 20%</div>
            </div>
          </div>

          <div className="md:col-span-2 rounded-3xl bg-slate-900/60 border border-white/10 p-6 backdrop-blur-xl" id="marketplace">
            <div className="flex items-center gap-3">
              <Star className="text-emerald-400" />
              <h3 className="text-white font-semibold">The Marketplace</h3>
            </div>
            <p className="mt-3 text-slate-300">Hire elite trainers with proven results.</p>
            <div className="mt-4 flex -space-x-3">
              {[1,2,3,4,5].map((i)=> (
                <img key={i} src={`https://i.pravatar.cc/120?img=${i+10}`} alt="trainer" className="w-10 h-10 rounded-full ring-2 ring-slate-900"/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
