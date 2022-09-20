import styled from "styled-components"
import styles from "../styles/Home.module.css"

const Title = styled.div`
  font-size: 100px;
  margin-bottom: 100px;
`

export default function bounty() {
  return (
    <div className={styles.container}>
      <Title>Bounty</Title>
    </div>
  )
}
