import React, { lazy, Suspense } from 'react';
import './App.css';
import {BrowserRouter as Router,  
  Switch,
  Route} from 'react-router-dom';
const Nav = lazy(() => import('./components/nav'));
const My404route = lazy(() => import('./components/my404'));
const Home = lazy(() => import('./components/home'));
const renderLoader = () => <div  className="loader">
   <h3 className="loading-text">

Loading
</h3>
</div>; 
function App() {
  return (
    <Router>
     <Suspense fallback={renderLoader()}>
        <div  className="App">   
        <Nav/>        
             <Switch>
                <Route exact path="/" component={Home}/>
           <Route path='*' exact={true} component={My404route} />
             </Switch> 
        </div>
    </Suspense>
  </Router>
  );
}

export default App;
