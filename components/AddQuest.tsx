import styled from "styled-components"
import { Formik, Form, Field } from "formik"
import { Quest, Tag } from "storage/quest"
import TagSelect from "components/TagSelect"
import { useFirestore, useUser } from "reactfire"
import { doc, setDoc, collection, getDoc } from "firebase/firestore"

const Title = styled.div`
  font-size: 100px;
  margin-bottom: 100px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
`

const Caption = styled.div`
  font-size: 25px;
`

export default function AddQuest(): JSX.Element {
  const tags = Object.values(Tag).map((tag: Tag) => ({
    value: tag,
    label: tag,
  }))
  const firestore = useFirestore()
  const { data: user } = useUser()

  const onSubmit = async (values: Quest) => {
    try {
      const questColRef = collection(firestore, "quests")
      const questRef = doc(questColRef)
      const questSnap = await getDoc(questRef)
      if (!questSnap.exists())
        await setDoc(questRef, {
          title: values.title,
          description: values.description,
          reward: values.reward,
          tags: values.tags,
          questId: questRef.id,
          userId: user.uid,
        })
      alert("Quest Created")
    } catch (error) {
      alert("Error:" + error)
    }
  }

  return (
    <div>
      <Title>Add Quest</Title>
      <Formik
        initialValues={{
          title: "",
          description: "",
          reward: 0,
          tags: [],
        }}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Column>
              <Caption>Title</Caption>
              <Field type="text" name="title" />
              <Caption>Description</Caption>
              <Field type="text" name="description" />
              <Caption>Reward</Caption>
              <Field type="number" name="reward" />
              <Caption>Tags</Caption>
              <Field
                name="tags"
                options={tags}
                component={TagSelect}
                isMulti={true}
              />
              <button type="submit">Add Quest</button>
            </Column>
          </Form>
        )}
      </Formik>
    </div>
  )
}
