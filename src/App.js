import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import Header from './components/Header/Header';


function App () {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path= '/' exact component= {HomePage}/>
        <Route path= '/videos/:videoId' component= {HomePage}/>
        <Route path= '/upload' component= {UploadPage}/>
      </Switch>
    </Router>
  )
}
export default App;