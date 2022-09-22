import styled from "styled-components"
import { Formik, Form, Field } from "formik"
import { Tag } from "storage/quest"
import TagSelect from "components/TagSelect"

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

  return (
    <div>
      <Title>Add Quest</Title>
      <Formik
        initialValues={{ title: "", description: "", reward: "", tags: [] }}
        onSubmit={(values) => {
          console.log(values)
        }}
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
