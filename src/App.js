import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Play from "./Play";
import { useEffect, useState } from "react";

function App() {
  // const word = "route"?.toUpperCase().split("");

  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState([]);
  const [hint, setHint] = useState("");
  const fetchWord = async () => {
    try {
      fetch("http://localhost:8000/api/data")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          setLoading(false);
          const obj = data.data;

          const name = Object.keys(obj)[0] || "check";
          const hint = Object.values(obj)[0] || "";
          setHint(hint);
          setWord(name.toUpperCase("").split(""));
        })
        .catch((error) => {
          setLoading(false);
          console.error("There was a problem with the fetch operation:", error);
        });
    } catch (err) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchWord();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/play" element={<Play word={word} loading={loading} hint={hint} />} />
        <Route path="/" element={<Main loading={loading} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
