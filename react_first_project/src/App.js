
import './App.css';
import Home from './containers/Home';
import Bollywood from './containers/Bollywood';
import Fitness from './containers/Fitness';
import Technology from './containers/Technology';
import { BrowserRouter ,Switch, Route } from 'react-router-dom';
import Blog from './containers/Blog';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
      <Route path="/Fitness"  component={Fitness}/>
      <Route path="/Bollywood"  component={Bollywood}/>
      <Route path="/Technology"  component={Technology} />
      <Route path="/Blog"  component={Blog} />
      <Route path="/" exact component={Home} />

      </Switch>
    
      
    </div>
  

    </BrowserRouter>
    );
}

export default App;
