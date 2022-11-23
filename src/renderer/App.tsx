import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import swr, { SWRConfig } from 'swr';
import axios from 'axios';
import './App.css';

import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';

import icon from '../../assets/icon.svg';

const SERVER_URL = 'http://localhost:5000';
export default function App() {
  return (
    <SWRConfig
      value={{
        fetcher: (url) =>
          axios
            .get(`${SERVER_URL}${url}`)
            .then((res) => res.data)
            .catch((err) => {
              throw err;
            }),
      }}
    >
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </SWRConfig>
  );
}
