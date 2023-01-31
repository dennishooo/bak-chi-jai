import { Button, Group, NumberInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useForm } from "@mantine/form";

type Props = { totalNumberOfPlayers: number };

export default function PlayerCombination({ totalNumberOfPlayers }: Props) {
  const [numberOfHost, setNumberOfHost] = useState(1);
  const [numberOfCivilian, setNumberOfCivilian] = useState(
    totalNumberOfPlayers - 3
  );
  const [numberOfUnderCover, setNumberOfUnderCover] = useState(1);
  const [numberOfBakChiJai, setNumberOfBakChiJai] = useState(1);

  useEffect(() => {
    if (
      numberOfHost + numberOfUnderCover + numberOfBakChiJai >
      totalNumberOfPlayers
    ) {
      alert("fuck off");
    }
    setNumberOfCivilian(
      totalNumberOfPlayers -
        numberOfHost -
        numberOfUnderCover -
        numberOfBakChiJai
    );
  }, [
    totalNumberOfPlayers,
    numberOfHost,
    numberOfCivilian,
    numberOfUnderCover,
    numberOfBakChiJai,
  ]);

  const form = useForm({
    initialValues: {
      numberOfHost,
      numberOfCivilian,
      numberOfUnderCover,
      numberOfBakChiJai,
    },
  });

  return (
    <>
      <h3>遊戲設定</h3>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <NumberInput
          placeholder="主持數目"
          label="主持數目"
          withAsterisk
          //   value={numberOfHost}
          min={0}
          max={1}
          //   onChange={(val) => {
          //     if (typeof val === "number") {
          //       setNumberOfHost(val);
          //     }
          //   }}
          {...form.getInputProps("numberOfHost")}
        />
        <NumberInput
          placeholder="平民數目"
          label="平民數目"
          withAsterisk
          value={numberOfCivilian}
          min={0}
          max={totalNumberOfPlayers}
          onChange={(val) => {
            if (typeof val === "number") setNumberOfCivilian(val);
          }}
        />
        <NumberInput
          placeholder="臥底數目"
          label="臥底數目"
          withAsterisk
          value={numberOfUnderCover}
          min={0}
          max={totalNumberOfPlayers}
          onChange={(val) => {
            if (typeof val === "number") setNumberOfUnderCover(val);
          }}
        />
        <NumberInput
          placeholder="白痴仔數目"
          label="白痴仔數目"
          withAsterisk
          value={numberOfBakChiJai}
          min={0}
          max={totalNumberOfPlayers}
          onChange={(val) => {
            if (typeof val === "number") setNumberOfBakChiJai(val);
          }}
        />
        <Group position="right" mt="md">
          <Button type="submit">提交</Button>
        </Group>
      </form>
    </>
  );
}
