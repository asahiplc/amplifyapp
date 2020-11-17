import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AuthLayout from 'layouts/Auth.js';
import AdminLayout from 'layouts/Admin.js';
import { withAuthenticator } from 'aws-amplify-react';

import 'bootstrap/dist/css/bootstrap.css';
import 'assets/scss/paper-dashboard.scss?v=1.2.0';
import 'assets/demo/demo.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

const hist = createBrowserHistory();

function App() {
  return (
    <div className='App'>
      <Router history={hist}>
        <Switch>
          <Route path='/auth' render={(props) => <AuthLayout {...props} />} />
          <Route path='/admin' render={(props) => <AdminLayout {...props} />} />
          <Redirect to='/admin/dashboard' />
        </Switch>
      </Router>
    </div>
  );
}

export default withAuthenticator(App);