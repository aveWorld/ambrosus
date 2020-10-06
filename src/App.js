import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Styles
import './styles/Main.scss';

// Pages
import Layout from './components/Layout';
import Home from './pages/Home';
import AmberToken from './pages/AmberToken';
import Ecosystem from './pages/Ecosystem';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/amber-token" component={() => <AmberToken />} />
        <Route
          exact
          path="/ecosystem-overview"
          component={() => <Ecosystem />}
        />
        <Route exact path="/404" component={() => <NotFound />} />
        <Redirect to="/404" />
      </Switch>
    </Layout>
  );
}

export default App;
