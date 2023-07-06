import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import AboutPage from './About.js';
import Academics from './Academics.js';
import WorkService from './Work-Service.js';
import Awards from './Awards.js';

function App(props) {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route index element={<AboutPage />} />
          <Route path="academics" element={<Academics />}/>
          <Route path="work-service" element={<WorkService />}/>
          <Route path="awards" element={<Awards />}/>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </main>
      <footer>
        <p className='background-citation'>
          Image by Sarah Schafer at the UW Farm, 2022.
        </p>
        <p>
          Website built using <a href='https://react.dev/'>React</a> and <a href='https://getbootstrap.com/'>Bootstrap</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
