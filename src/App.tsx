import { MantineProvider, NumberInput, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import PlayerCombination from "./components/PlayerCombination";

function App() {
  const [numberOfPlayers, setNumberOfPlayers] = useState(5);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <h1>我係白痴仔</h1>
      <NumberInput
        min={0}
        value={numberOfPlayers}
        onChange={(value) => {
          if (typeof value === "number") setNumberOfPlayers(value);
        }}
        placeholder="玩家人數"
        label="玩家人數"
        withAsterisk
      />
      {numberOfPlayers > 0 && (
        <PlayerCombination totalNumberOfPlayers={numberOfPlayers} />
      )}
    </MantineProvider>
  );
}

export default App;
