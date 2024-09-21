import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppleNews from './components/AppleNews';
import TeslaNews from './components/TeslaNews';
import CountryNews from './components/CountryNews';
import SourcesNews from './components/SourcesNews';
import DomainsNews from './components/DomainsNews';

export class App extends Component {
  render() {
    return (
      <Router>
        <HomePage />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AppleNews" element={<AppleNews />} />
          <Route path="/TeslaNews" element={<TeslaNews />} />
          <Route path="/CountryNews" element={<CountryNews />} />
          <Route path="/SourcesNews" element={<SourcesNews />} />
          <Route path="/DomainsNews" element={<DomainsNews />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
