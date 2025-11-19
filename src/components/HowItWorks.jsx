import { ClipboardList, PenTool, LineChart } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { icon: ClipboardList, title: 'Onboard', desc: 'Answer a quick quiz to set goals, equipment, schedule, and constraints.' },
    { icon: PenTool, title: 'Execute', desc: 'Use the smart logger with auto-progression and technique cues.' },
    { icon: LineChart, title: 'Optimize', desc: 'See insights and adjust based on HRV, sleep, and performance trends.' },
  ];

  return (
    <section className="relative" aria-labelledby="how">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">How it works</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {steps.map((s, i)=> (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6">
              <s.icon className="text-emerald-400" />
              <h3 className="mt-3 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
