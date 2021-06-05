import './App.css';
import {BrowserRouter,Switch, Route} from  'react-router-dom';
import Main from './page/main/index';
import SettingsCategory from './page/settings/category/index';
import ViewPosting from './page/view-posting/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/settings/info">    
          {/* <Settings /> */}
        </Route>
        <Route exact path="/settings/category">    
          <SettingsCategory />
        </Route>
        {/* <Route path="/post">
          <ViewPosting />
        </Route>  */}
        <Route path="/">    {/* default root는 마지막에 작성 */}
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
