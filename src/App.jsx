import { useState, useEffect } from "react";
import "./styles.scss";

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="main">
      <h1>system time: {date.toLocaleTimeString()}</h1>
      <h1 className="date">date: {date.toLocaleDateString()}</h1>
    </div>
  );
}

export default App;
