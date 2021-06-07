import './App.css';
import WritePosting from './page/write-posting/index';
import SettingsBlogInfo from './page/settings/blog-info/index'

function App() {
  return (
// <<<<<<< Updated upstream
//     <WritePosting/>
// =======
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/settings/info">    
//           {/* <Settings /> */}
//         </Route>
//         <Route exact path="/settings/category">    
//           <SettingsCategory />
//         </Route>
//         <Route path="/">    {/* default root는 마지막에 작성 */}
//           <Main />
//         </Route>
//       </Switch>
//     </BrowserRouter>
    
// >>>>>>> Stashed changes
    <SettingsBlogInfo />
  );
}

export default App;
