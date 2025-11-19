import Spline from '@splinetool/react-spline';
import { PlayCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                The Operating System for Your Biological Machinery.
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed">
                Stop scribbling in notebooks. GymOS combines intelligent workout tracking, automated progressive overload, and a pro-trainer marketplace into one ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 text-slate-900 font-semibold px-6 py-3 shadow-[0_0_0_1px_rgba(16,185,129,0.4)] hover:bg-emerald-400 transition">
                  Get Your Training Plan
                  <ArrowRight size={18} />
                </a>
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-white px-6 py-3 hover:bg-white/10 transition">
                  <PlayCircle size={18} />
                  Watch Demo
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-500/20 to-emerald-500/20 blur-2xl" />
                <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-6">
                  <div className="text-slate-300 text-sm">Smartphone Dashboard</div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-xl p-4 bg-slate-800/50 border border-white/10">
                      <div className="text-xs text-slate-400">Readiness Score</div>
                      <div className="mt-2 text-3xl font-bold text-emerald-400">92</div>
                      <div className="mt-1 text-xs text-emerald-300/80">Optimal</div>
                    </div>
                    <div className="rounded-xl p-4 bg-slate-800/50 border border-white/10">
                      <div className="text-xs text-slate-400">Workout Graph</div>
                      <div className="mt-2 h-16 flex items-end gap-1">
                        {[20,40,30,60,50,80,70].map((h, i) => (
                          <div key={i} className="w-3 bg-indigo-500/70 rounded-t" style={{height: `${h}%`}} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-xl p-4 bg-slate-800/50 border border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">Next Session</span>
                      <span className="text-xs text-emerald-300">+2.5 kg progression</span>
                    </div>
                    <div className="mt-2 h-2 rounded bg-slate-700 overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-indigo-500 to-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
