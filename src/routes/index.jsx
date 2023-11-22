import '../sass/main.scss';
import React from 'react';
import Home from '../pages/home';
import Question from '../pages/question';
import Challenge from '../pages/challenge';
import Error from '../pages/error';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/challenges" element={<Challenge />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
