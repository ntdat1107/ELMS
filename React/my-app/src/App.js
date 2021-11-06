import './App.css';
import HomePageGuestUi  from './componentJS/Guest/HomePageGuestUI'
import InstructorUI from './componentJS/Instructor/InstructorUI';
import LoginController from './componentJS/Login/LoginController';

function App() {
  return (
  <div className="App">
    <HomePageGuestUi/>
    <InstructorUI />
    <LoginController />
  </div>  
  )
}

export default App;