import { Stack } from "@mui/material";
import Header from "./Header";
import Tile from "./Tile";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Keyboard from "./Kayboard";
const Play = ({ word }) => {
  const [active, setActive] = useState(0);
  const [lettersUsed, setLetterUsed] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (word?.length !== 5) {
      navigate("/");
    }
  }, [word, navigate]);
  return (
    <Stack height={"100vh"}>
      <Header />
      <Stack
        sx={{
          display: "flex",

          alignItems: "center",
          height: "100%",
          marginTop: "70px",
          gap: "10px",
        }}
      >
        {new Array(5).fill(0)?.map((item, index) => {
          return (
            <Tile
              key={"index" + index}
              active={index === active}
              word={word}
              onSubmit={(keys) => {
                setLetterUsed([...new Set([...lettersUsed, ...keys])]);
                setActive(active + 1);
              }}
            />
          );
        })}

        <Keyboard lettersUsed={lettersUsed} word={word} />
      </Stack>
    </Stack>
  );
};

export default Play;
