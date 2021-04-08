import './App.css';
import { RecoilRoot } from 'recoil'
import {BrowserRouter, Switch, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import TutorialPage from './pages/TutorialPage';


function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Switch>
          <Route path='/demo'>
            <TutorialPage/>
          </Route>
          <Route path='/'><LoginPage/></Route>
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
