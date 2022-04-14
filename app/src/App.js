import { Amplify } from 'aws-amplify';
import Home from './pages/home.js';
import AddBusiness from './pages/addBiz.js';

import {
  BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/addBiz" element ={<AddBusiness />}/>
      </Routes>
      
    </Router>
  );
}

export default (App);