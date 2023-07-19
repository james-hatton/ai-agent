import React, { useEffect, useState } from 'react';
import { User } from '../types/user';
import { login } from '../services/authService';
import '../styles/Login.css';

const Login: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await login();
      setUser(user);
    };

    fetchUser();
  }, []);

  return (
    <div className="login">
      {user ? (
        <div>
          <h2>Welcome back, {user.name}!</h2>
          <p>You are now logged in.</p>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
          <button onClick={login}>Log in with Azure</button>
        </div>
      )}
    </div>
  );
};

export default Login;