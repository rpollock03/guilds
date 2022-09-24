import styles from "../styles/Home.module.css"
import Quests from "components/Quests"
import { Title } from "components/Title"
import { InstantSearch } from "react-instantsearch-hooks-web"
import { searchClient } from "../typesense/insantsearch"

export default function QuestsPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <InstantSearch searchClient={searchClient} indexName="quests">
        <Title>Quests</Title>
        <Quests />
      </InstantSearch>
    </div>
  )
}
