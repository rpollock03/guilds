import { Tag } from "storage/quest/types"

export default function QuestHit({ hit }): JSX.Element {
  console.log(hit)
  return (
    <div>
      <div>Title: {hit?.title}</div>
      <div>Description: {hit?.description}</div>
      <div>Reward: {hit?.reward}</div>
      <div>Tags:</div>
      {hit?.tags.map((tag: Tag) => (
        <div>{tag}</div>
      ))}
    </div>
  )
}
