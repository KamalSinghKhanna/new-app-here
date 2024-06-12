import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddressPage from "./components/AddressPage";
import { generateItems } from "./utils/generateItems";
import LargeList from "./components/LargeList";
import Counter from "./components/Counter";

function App() {
  const items = generateItems(1000);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddressPage />} />
        <Route path="/largelist" element={<LargeList items={items} />} />
        <Route path="/redux-demo" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
