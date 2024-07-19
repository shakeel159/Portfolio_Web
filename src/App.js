import logo from './logo.svg';
import './App.css';
//components
import Aboutme from './Components/AboutMe';

function App() {
  return (
    <>
      <div className="Page">
        <div className="NameBox">
          <h1>Jazib Shakeel</h1>
        </div>
        <Aboutme></Aboutme>
      </div>
    </>
  );
}

export default App;
