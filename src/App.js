import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';


function App () {
  return (
    <Router>
      <Switch>
        <Route path= '/' exact component= {HomePage}/>
        <Route path= '/videos/:videoId' component= {HomePage}/>
        <Route path= '/upload' component= {UploadPage}/>
      </Switch>
    </Router>
  )
}
export default App;