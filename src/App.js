import logo from './logo.svg';

import Image from "./Components/Image.js"
import Footer from "./Components/Footer.js"
import Main from "./Components/Main.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <div className="App">
      <div className='center'>
        <Image />
        <Main />
        <Footer />
      </div>
    </div>
    
  );
}

export default App;
