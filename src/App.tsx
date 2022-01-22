import {
  Routes,
  Route
} from "react-router-dom";
import {Layout} from './components/layout/Layout'
import {Page} from './components/mains/Page'



function App() {
  return (
    <>
      <Routes>
       <Route path="/" element={<Layout/>}>
        <Route index element={<Page/>}/>    
       </Route>
     </Routes>
    </>
  );
}

export default App;
