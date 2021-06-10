import './App.css';
import Main from './page/main/index';
import SettingsCategory from './page/settings/category/index';
import ViewPosting from './page/view-posting/index';
import SettingsBlogInfo from './page/settings/blog-info/index'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/settings/info">    
          <SettingsBlogInfo />
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
