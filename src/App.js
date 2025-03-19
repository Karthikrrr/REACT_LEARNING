import "./App.css";
import About from "./components/About";
import Myform from "./components/Myform";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar title='hello'/>
      <div className="container my-3">
      <Myform heading="Enter The Text To Analize" />
      <About/>
      {/* some changes to be done  */}
      </div>
      
    </>
  );
}

export default App;
