import { Navbar } from "./components/layouts/Navbar";
import { ItemListContainer } from "./components/pages/ItemListContainer.jsx";
import "../src/App.css"

function App() {


  return (
    <>
    <div className="bodyApp">
      <Navbar/>
      <ItemListContainer greetings= "Bienvenido a la Landing Page!" />
    </div>
    </>
  );
}

export default App
