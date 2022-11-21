import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';

import icon from '../../assets/icon.svg';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}
