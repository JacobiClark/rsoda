import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Axios from 'axios';
import swr, { SWRConfig } from 'swr';

import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';

import icon from '../../assets/icon.svg';
const options = {
  fetcher: (url: any) => Axios.get(url).then((res) => res.data),
};
const Hello = () => {
  const { data, error } = swr('http://127.0.0.1:1212/hello', options.fetcher);
  console.log(error);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {JSON.stringify(data)}</div>;
};

export default function App() {
  return (
    <SWRConfig options={options}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Hello />} />
          </Routes>
        </Layout>
      </Router>
    </SWRConfig>
  );
}
