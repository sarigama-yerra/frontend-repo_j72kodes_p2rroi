export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div className="md:col-span-2">
            <div className="text-white font-extrabold text-lg">GymOS</div>
            <p className="mt-2 text-slate-400 max-w-md">The dark-modern operating system for your biological machinery.</p>
          </div>
          <div>
            <div className="text-slate-300/90 font-semibold">For Trainers</div>
            <ul className="mt-3 space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-slate-200">Become a coach</a></li>
              <li><a href="#" className="hover:text-slate-200">Coach dashboard</a></li>
            </ul>
          </div>
          <div>
            <div className="text-slate-300/90 font-semibold">For Athletes</div>
            <ul className="mt-3 space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-slate-200">Training plans</a></li>
              <li><a href="#" className="hover:text-slate-200">Find a coach</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} GymOS. All rights reserved.</div>
      </div>
    </footer>
  );
}
