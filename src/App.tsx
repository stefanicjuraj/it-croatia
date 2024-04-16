import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
// Components
import Sidebar from './components/Sidebar';
// Pages
import Home from "./pages/Home"
import Companies from './pages/Companies';
import Conferences from './pages/Conferences';
import Education from './pages/Education';
import Certificates from './pages/Certificates';
import Communities from './pages/Communities';
import Workplace from './pages/Workplaces';
import Podcasts from './pages/Podcasts';
import Internships from './pages/Internships';
import Contribute from './pages/Contribute';
import FourOFour from './pages/404';
// Utils
import ScrollToTop from './utils/scrollToTop';

export default function App() {
  return (
    <>
      <Router>
        <Analytics />
        <SpeedInsights />
        <Sidebar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/places-to-work" element={<Workplace />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </>
  )
}
