import {
  Routes,
  Route
} from "react-router-dom";
import {Layout} from './components/layout/Layout'
import {Home} from './components/mains/Home'



function App() {
  return (
    <>
      <Routes>
       <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>    
       </Route>
     </Routes>
    </>
  );
}

export default App;
