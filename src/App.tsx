import React, { useEffect, useState } from 'react';
import { User } from './types/user';
import { login, logout, isAuthenticated } from './services/authService';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Login from './components/Login';
import Logout from './components/Logout';
import Footer from './components/Footer';
import './styles/App.css';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await isAuthenticated();
      setUser(user);
    };
    checkAuth();
  }, []);

  return (
    <div className="App">
      <Navbar user={user} />
      {user ? (
        <>
          <Home />
          <About />
          <Portfolio />
          <Contact />
          <Logout onLogout={logout} />
        </>
      ) : (
        <Login onLogin={login} />
      )}
      <Footer />
    </div>
  );
};

export default App;