import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import ErrorPage from './pages/404';
import Sample from './pages/Sample';
import SampleItem from './pages/SampleItem';
import SampleTop from './pages/SampleTop';
import CommonNav from './components/CommonNav';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="title">React.js</div>
      <CommonNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="sample" element={<Sample />}>
          <Route path=":sampleId" element={<SampleItem />} />
          <Route path=":sampleId/:detail" element={<SampleItem />} />
          <Route path=":sampleId/:detail/:type" element={<SampleItem />} />
          <Route index element={<SampleTop />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
