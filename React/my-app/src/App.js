import './App.css';
import HomePageGuestUi  from './componentJS/Guest/HomePageGuestUI'
import InstructorUI from './componentJS/Instructor/InstructorUI';

function App() {
  return (
  <div className="App">
    <HomePageGuestUi/>
    <InstructorUI />
  </div>  
  )
}

export default App;