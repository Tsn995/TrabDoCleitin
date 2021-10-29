import logo from './logo.svg';
import './App.css';

function App() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

export default App;


                  
                  

                  
