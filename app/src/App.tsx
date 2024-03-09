import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// Components
import Sidebar from './components/Sidebar';
// Pages
import Home from "./pages/Home"
import Companies from './pages/Companies';
import Conferences from './pages/Conferences';

export default function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/conferences" element={<Conferences />} />
        </Routes>
      </Router>
    </>
  )
}
