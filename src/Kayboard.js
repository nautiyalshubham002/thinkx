import { Stack } from "@mui/material";
import ViewBox from "./ViewBox";

const Keyboard = ({ lettersUsed, word }) => {
  console.log({ lettersUsed });
  const line1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const line2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const line3 = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <Stack gap={"10px"} justifyContent={"center"} alignItems={"center"}>
      <Stack flexDirection={"row"} gap={"10px"}>
        {line1?.map((item) => {
          return (
            <ViewBox
              letter={item}
              validWord={word?.includes(item) && lettersUsed?.includes(item)}
              invalidWord={!word?.includes(item) && lettersUsed?.includes(item)}
            />
          );
        })}
      </Stack>

      <Stack flexDirection={"row"} gap={"10px"}>
        {line2?.map((item) => {
          return (
            <ViewBox
              letter={item}
              validWord={word?.includes(item) && lettersUsed?.includes(item)}
              invalidWord={!word?.includes(item) && lettersUsed?.includes(item)}
            />
          );
        })}
      </Stack>

      <Stack flexDirection={"row"} gap={"10px"}>
        {line3?.map((item) => {
          return (
            <ViewBox
              letter={item}
              validWord={word?.includes(item) && lettersUsed?.includes(item)}
              invalidWord={!word?.includes(item) && lettersUsed?.includes(item)}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Keyboard;
