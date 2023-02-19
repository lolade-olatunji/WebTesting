import React from "react";
import { Routes, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Dashboard from './pages/Dashboard';
import { UserProvider } from "./components/UserContext";

function App() {

  return (
    <div className="App">
    <UserProvider>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
			</Routes>
      </UserProvider>
    </div>
  );
}

export default App;