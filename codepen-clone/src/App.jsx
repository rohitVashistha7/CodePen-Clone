import "./App.css";
import Home from "./assets/components/Home";
import DataProvider from "./assets/context/DataProvider";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
