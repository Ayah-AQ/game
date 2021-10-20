import Game from "./components/Game"
import {home} from"./style"
import"./App.css"
function App() {
  return (
    <div style={home} className="Home">
     
      <h1 className="hed">Are u ready for Tic-Tac-Toe war</h1>  
      
  <Game/>
  
  </div>
  )}

export default App;
