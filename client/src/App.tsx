import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {useRoutes} from './routes';
import {useAuth} from './hooks/auth.hook';
import {AuthContext} from './context/AuthContext';
import {Navbar} from './components/Navbar';
import {Loader} from './components/Loader';
import { IAuthContext } from './interfaces';
import 'materialize-css';

const App: React.FC = () => {
  const {token, login, logout, userId, ready} = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  const context: IAuthContext = {
    token, login, logout, userId, isAuthenticated,
  }

  if(!ready) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={context}>
      <Router>
        {isAuthenticated && <Navbar/>}
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
