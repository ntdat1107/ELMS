import './App.css';
import { Route, BrowserRouter as Router, Link } from "react-router-dom"
import Header from './componentJS/header';
import SideBarInstructor from './componentJS/sideBar';



function App() {
  return (
    <Router>
      <div className="App">
        <SideBarInstructor />
        <Header />
      </div>
    </Router>
  );
}

export default App;