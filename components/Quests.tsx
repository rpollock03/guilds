import { Grid } from "styled-css-grid";
import { readQuests, populateQuests } from "firestore/quests";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import {
  CollectionReference,
  Firestore,
  DocumentData,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Quests(): JSX.Element {
  const [quests, setQuests] = useState([]);
  const firestore = useFirestore();

  useEffect(() => {
    setQuests((current) => [
      ...current,
      readQuests(firestore, useFirestoreCollectionData),
    ]);
  }, [quests]);

  return (
    <Grid columns={"repeat(auto-fit, minmax(210px, 1fr))"} gap={"83px"}>
      {quests.map((quest) => (
        <div>
          <button onClick={() => populateQuests(firestore)}>
            populate quests if not populated
          </button>
          <div>{quest.title}</div>
          <div>{quest.description}</div>
          <div>{quest.reward}</div>
          <div>{quest.tags}</div>
        </div>
      ))}
    </Grid>
  );
}
