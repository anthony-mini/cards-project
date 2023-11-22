import '../sass/main.scss';
import React from 'react';
import Home from '../pages/home';
import Question from '../pages/question';
import Error from '../pages/error';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/question" element={<Question />} />
        <Route exact path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
