import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { store } from './store';
import Layout from './components/Layout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DiseaseLibrary from './pages/DiseaseLibrary';
import ParentChildMode from './pages/ParentChildMode';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Medications from './pages/Medications';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/disease-library" element={<DiseaseLibrary />} />
        <Route path="/parent-child-mode" element={<ParentChildMode />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/medications" element={<Medications />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
