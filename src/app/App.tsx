import React from 'react';
import './styles/index.scss';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <div>Start</div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
