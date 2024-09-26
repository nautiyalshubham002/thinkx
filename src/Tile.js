import { Snackbar, Stack } from "@mui/material";
import Box from "./Box";
import { useEffect, useMemo, useState } from "react";
import "./ShakeComponent.css";

var checkWord = require("check-if-word");

const Tile = ({ active, onSubmit, word }) => {
  const words = checkWord("en"); // setup the language for check, default is en

  const [keys, setKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, msg: "" });

  const tileCompleted = useMemo(() => {
    return !active && keys.length;
  }, [active, keys]);
  const onKeyDown = (e) => {
    const key = e.key.toUpperCase();
    if (e.metaKey) return;
    if (key === "ENTER" && keys.length === 5) {
      setLoading(true);
      setTimeout(() => {
        if (words.check(keys.join(""))) onSubmit(keys);
        else {
          setSnackbar({ msg: "Invalid Word", open: true });
        }
        setLoading(false);
      });
    } else if (key === "BACKSPACE") {
      setKeys(keys.slice(0, keys.length - 1));
    } else {
      if (/[A-Z]/.test(key) && key.length === 1 && keys.length <= 4) {
        setKeys([...keys, key]);
      }
    }
  };

  useEffect(() => {
    if (active) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      if (active) window.removeEventListener("keydown", onKeyDown);
    };
  }, [keys, active]);

  return (
    <Stack flexDirection={"row"} gap={"10px"}>
      {new Array(5).fill(0).map((item, index) => {
        return (
          <Box
            className={loading ? "shake" : ""}
            key={"index" + index + keys[index]}
            value={keys[index]}
            tileCompleted={tileCompleted}
            correctPosition={tileCompleted && word[index] === keys[index]}
            correctWord={tileCompleted && word?.includes(keys[index])}
          />
        );
      })}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => {
          setSnackbar({});
        }}
        message={snackbar.msg}
      />
    </Stack>
  );
};

export default Tile;
