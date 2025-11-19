import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemStrip from './components/ProblemStrip';
import FeaturesBento from './components/FeaturesBento';
import Marketplace from './components/Marketplace';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <Hero />
      <ProblemStrip />
      <FeaturesBento />
      <Marketplace />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;