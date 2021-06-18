import './App.css';
import {BrowserRouter,Switch, Route} from  'react-router-dom';
import Main from './page/main/index';
import SettingsCategory from './page/settings/category/index';
import ViewPosting from './page/view-posting/index';
import WritePosting from './page/write-posting';
import SettingsBlogInfo from './page/settings/blog-info/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/settings">    
          <SettingNav/>
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
