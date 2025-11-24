import React, { useState } from 'react';
import PageSelector from './components/PageSelector';
import './App.css';

function App() {
  return (
    <>
      <PageSelector variant="button" />
      <PageSelector variant="desktop" />
      <PageSelector variant="home" />
    </>
  );
}

export default App;
