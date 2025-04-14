import { useState } from "react";
import Gallery from "./components/Gallery";
import "./styles/styles.css";

function App() {
  const [tours, setTours] = useState([]);

  const handleRemove = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      <h1 className="title">Our Tours</h1>
      <Gallery tours={tours} setTours={setTours} onRemove={handleRemove} />
    </main>
  );
}

export default App;

