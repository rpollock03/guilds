import styled from "styled-components"
import { Formik, Form, FormikProps } from "formik"
import { Stack, Button, Typography, TextField } from "@mui/material"

const EmailInput = styled(TextField)({
  width: "17rem",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    height: "100%",
    borderRadius: "0.5rem",
  },
})

interface FormValues {
  email: string
}

export function Subscribe() {
  const handleSubmit = (values: FormValues) => {
    alert("subscribed: " + values.email)
  }
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values: FormValues) => handleSubmit(values)}
    >
      {({ handleSubmit, handleChange, values }: FormikProps<FormValues>) => (
        <Form onSubmit={handleSubmit}>
          <Stack direction="row" spacing={3} height="3rem">
            <EmailInput
              variant="outlined"
              placeholder="Enter your email"
              type="email"
              name="email"
              onChange={(e) => handleChange(e)}
              value={values.email}
              required
            />
            <Button
              variant="contained"
              sx={{ borderRadius: "0.5rem" }}
              type="submit"
            >
              <Typography
                sx={{
                  textTransform: "none",
                  px: "0.6rem",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                Subscribe
              </Typography>
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  )
}
