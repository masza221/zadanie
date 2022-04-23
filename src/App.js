import { useState} from "react";
import "./App.css";
import Map from "./components/Map.js";
import Welcome from "./components/Welcome";

function App() {
  const [showMap, setLoading] = useState(false);

  const [geo, setGeo] = useState({
    from: { lon: 0, lat: 0 },
    to: { lon: 0, lat: 0 },
  });

  const [history, setHistory]= useState([])


  return (
    <div className="App">
      <Welcome
        obj={(value) => setGeo(value)}
        showmap={(value) => setLoading(value)}
       
      />
      {showMap !== false && <Map geo={geo}  history={(value) => setHistory( old => [...old,value])} />}
    </div>
  );
}

export default App;
