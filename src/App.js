import './App.css';
import {BrowserRouter,Switch, Route} from  'react-router-dom';
import Main from './page/main/index';
import SettingsNav from './page/settings/settings-nav';
import WritePosting from './page/write-posting';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/settings">    
<<<<<<< HEAD
          <SettingsNav/>
=======
          <SettingsNav />
>>>>>>> 84b6ea202042ed07e68ba99b3882b256ee887800
        </Route>
        <Route exact path="/write-posting">
          <WritePosting/>
        </Route>
        <Route path="/">    {/* default root는 마지막에 작성 */}
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
