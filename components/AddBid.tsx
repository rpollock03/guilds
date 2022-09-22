import styled from "styled-components"
import { Formik, Form, Field } from "formik"
import { useRouter } from "next/router"

const Title = styled.div`
  font-size: 100px;
  margin-bottom: 100px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
`

const Caption = styled.div`
  font-size: 25px;
`

export default function AddBid(): JSX.Element {
  const router = useRouter()
  const { questId } = router.query

  return (
    <div>
      <Title>Add Bid</Title>
      <Formik
        initialValues={{ amount: "", timeEstimate: "" }}
        onSubmit={(values) => {
          values.timeEstimate = values.timeEstimate + " days"
          console.log("values", values)
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Column>
              <Caption>Amount</Caption>
              <Field type="number" name="amount" />
              <Caption>Time Estimate</Caption>
              <Field type="number" name="timeEstimate" />
              <button type="submit">Submit</button>
            </Column>
          </Form>
        )}
      </Formik>
    </div>
  )
}
