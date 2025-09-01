import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // Tambahkan import ini
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Member from './pages/Member';
import DataPrivacy from './pages/DataPrivacy';
import PersonalTrainer from './pages/PersonalTrainer';
import Class from './pages/Class';
import StrengthClass from './pages/StrengthClass';
import CardioClass from './pages/CardioClass';
import DanceClass from './pages/DanceClass';
import MindBodyClass from './pages/MindBodyClass';
import CyclingClass from './pages/CyclingClass';
import FreeTrail from './components/FreeTrail';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Tambahkan ini di sini */}
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/membership" element={<Member />} />
            <Route path="/data-privacy" element={<DataPrivacy />} />
            <Route path="/trainer" element={<PersonalTrainer />} />
            <Route path="/class" element={<Class />} />
            <Route path="/class/class-strength" element={<StrengthClass />} />
            <Route path="/class/class-cardio" element={<CardioClass />} />
            <Route path="/class/dance-class" element={<DanceClass />} />
            <Route path="/class/class-mind-body" element={<MindBodyClass />} />
            <Route path="/class/class-cycling" element={<CyclingClass />} />
            <Route path="/free-trail" element={<FreeTrail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;