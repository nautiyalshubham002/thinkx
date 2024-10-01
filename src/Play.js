import { Box, Button, Modal, Snackbar, Stack, Typography } from "@mui/material";
import Header from "./Header";
import Tile from "./Tile";
import logo from "./congrats.gif";
import hintimg from "./hint.png";
import logo2 from "./win.jpg";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Keyboard from "./Kayboard";
const Play = ({ word = [], hint }) => {
  const [active, setActive] = useState(0);
  const [win, setWin] = useState(false);
  const [lost, setLost] = useState(false);
  const [lettersUsed, setLetterUsed] = useState([]);
  const [showHint, setShowHint] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (word?.length !== 5) {
      navigate("/");
    }
  }, [word, navigate]);

  useEffect(() => {
    if (active >= 5) setLost(true);
  }, [active]);
  return (
    <Stack height={"100vh"}>
      <Header />
      {active === 4 && (
        <Stack
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
          }}
          onClick={() => {
            setShowHint(true);
          }}
        >
          <img alt="hint" src={hintimg} style={{ height: "30px" }}></img>
        </Stack>
      )}
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
                if (keys?.join("") === word?.join("")) {
                  setWin(true);
                } else setActive(active + 1);
                setLetterUsed([...new Set([...lettersUsed, ...keys])]);
              }}
            />
          );
        })}
        <Modal
          open={showHint}
          onClose={() => {}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "1px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                color: "orange",
              }}
            >
              Hint
            </Typography>
            <Stack
              sx={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>{hint}</Typography>

              <Button
                sx={{
                  color: "orange",
                  border: "1px solid orange",
                  height: "40px",
                }}
                variant="outlined"
                onClick={() => {
                  setShowHint(false);
                }}
              >
                Close
              </Button>
            </Stack>
          </Box>
        </Modal>
        <Modal
          open={win}
          onClose={() => {}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "1px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                color: "orange",
              }}
            >
              SPLENDID
            </Typography>
            <Stack
              sx={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img alt="logo" src={logo} height={"80px"} width={"200px"}></img>
              <img alt="logo" src={logo2} height={"80px"} width={"200px"}></img>

              <Button
                sx={{
                  color: "orange",
                  border: "1px solid orange",
                  height: "40px",
                }}
                variant="outlined"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Next
              </Button>
            </Stack>
          </Box>
        </Modal>
        <Modal
          open={lost}
          onClose={() => {}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "1px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                color: "orange",
              }}
            >
              You Lost
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                color: "orange",
              }}
            >
              Correct Word is {word?.join("").toUpperCase()}
            </Typography>
            <Stack
              sx={{
                width: "100%",
                justifyContent: "end !important",
                flexDirection: "row",
              }}
            >
              <Button
                sx={{
                  color: "orange",
                  border: "1px solid orange",
                }}
                variant="outlined"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Next
              </Button>
            </Stack>
          </Box>
        </Modal>
        <Keyboard lettersUsed={lettersUsed} word={word} />
      </Stack>
    </Stack>
  );
};

export default Play;
