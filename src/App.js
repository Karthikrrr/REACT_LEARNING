import "./App.css";
import Myform from "./components/Myform";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar title='hello'/>
      <div className="container my-3">
      <Myform heading="Enter The Text To Analize" />
      </div>
      
    </>
  );
}

export default App;
