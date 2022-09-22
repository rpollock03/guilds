import styled from "styled-components"
import { Formik, Form, Field } from "formik"
import { useRouter } from "next/router"
import { Bid } from "storage/quest"
import { useFirestore } from "reactfire"

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

interface FormValues {
  amount: number
  timeEstimate: number
}

export default function AddBid(): JSX.Element {
  const router = useRouter()
  const { questId } = router.query
  const firestore = useFirestore()

  const handleSubmit = async (values: FormValues) => {
    const timeEstimate = values.timeEstimate + " days"

    console.log("values", values)
  }

  return (
    <div>
      <Title>Add Bid</Title>
      <Formik
        initialValues={{ amount: 0, timeEstimate: 0 }}
        onSubmit={(values) => handleSubmit(values)}
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
