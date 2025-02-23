import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DiseaseLibrary from './pages/DiseaseLibrary';
import ParentChildMode from './pages/ParentChildMode';
import Notifications from './pages/Notifications';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/disease-library" element={<DiseaseLibrary />} />
                <Route path="/parent-child-mode" element={<ParentChildMode />} />
                <Route path="/notifications" element={<Notifications />} />
              </Routes>
            </div>
          </main>
          <footer className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 text-center">
            <p>&copy; 2025 Medico. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
