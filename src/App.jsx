import "./App.css";
import Overlay from "./Overlay";
import CanvasComponent from "./components/CanvasComponent";
import Model from "./components/Model";



function App(){
  return(
    <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
      <CanvasComponent>
        <Model/>
      </CanvasComponent>
      <Overlay/>

    </div>
  )
}

export default App;