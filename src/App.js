import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';

export const apiUrl= 'https://project-2-api.herokuapp.com';
export const apiKey= '9a17cb10-73b2-43e1-b6cd-11977fb166d6';

function App () {
  return (
    <Router>
      <Switch>
        <Route path= '/' exact component= {HomePage}/>
        <Route path= '/video/:videoId' component= {HomePage}/>
        <Route path= '/upload' component= {UploadPage}/>
      </Switch>
    </Router>
  )
}
export default App;