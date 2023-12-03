import Catalog from "./Components/Catalog";
import Navbar from "./Components/Navbar";

function App() {
  return <>
    <header>
      <Navbar /> 
      <h1>Shahar Eccommerce</h1>
    </header>
    <main>
      <Catalog />
    </main>
    <footer>
      <p>
        all rights reserved to me
      </p>
    </footer>
  </>;
}

export default App
