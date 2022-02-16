import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

import Login from "./Pages/Login";
import Home from "./Pages/Home";

import awsExports from './aws-exports';
Amplify.configure(awsExports);


export default function App() {
  {
    return this.state.loading === true ? <h2>Loading...</h2> : (
     {Home}
    );
  };
  
}
