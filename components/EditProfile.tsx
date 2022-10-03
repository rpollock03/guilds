import { Formik, Form, FieldArray } from "formik"
import { useFirestore, useUser } from "reactfire"
import { doc, setDoc } from "firebase/firestore"
import { Caption, FormField } from "./Form"
import { Button, Box } from "@mui/material"
import { Hero } from "../storage/hero"

export function EditProfile({ hero }): JSX.Element {
  const firestore = useFirestore()
  const { data: user } = useUser()

  const handleSubmit = async (values) => {
    const updatedProfile: Hero = {
      name: {
        first: values.firstName,
        second: values.secondName,
        last: values.lastName,
      },
      profilePicture: values.profilePicture,
      email: values.email,
      location: {
        city: values.city,
        country: values.country,
      },
      bio: values.bio,
      twitter: values.twitter,
      linkedin: values.linkedin,
      website: values.website,
      portfolio: values.portfolio,
      experience: values.experience,
    }

    try {
      const heroRef = doc(firestore, `heroes/${user.uid}`)
      await setDoc(heroRef, {
        ...updatedProfile,
        id: user.uid,
      })
      console.log("success")
    } catch (error) {
      alert("Error:" + error)
    }
  }

  const initialValues = {
    firstName: hero?.name.first,
    secondName: hero?.name.second,
    lastName: hero?.name.last,
    email: hero?.email,
    profilePicture: hero?.profilePicture,
    city: hero?.location.city,
    country: hero?.location.country,
    bio: hero?.bio,
    twitter: hero?.twitter,
    linkedin: hero?.linkedin,
    website: hero?.website,
    portfolio: hero?.portfolio,
    experience: hero?.experience,
  }

  if (!user) {
    return <div>loading</div>
  }

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values, handleChange, handleBlur, handleSubmit, handleReset }) => (
          <Form onSubmit={handleSubmit}>
            <Caption>First Name</Caption>
            <FormField
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Caption>Second Name</Caption>
            <FormField
              type="text"
              name="secondName"
              value={values.secondName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Caption>Last Name</Caption>
            <FormField
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Caption>Email</Caption>
            <FormField
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Caption>Profile Picture</Caption>
            <FormField
              type="text"
              name="profilePicture"
              value={values.profilePicture}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Caption>City</Caption>
            <FormField
              type="text"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Caption>Country</Caption>
            <FormField
              type="text"
              name="country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Caption>Bio</Caption>
            <FormField
              type="text"
              name="bio"
              value={values.bio ? values.bio : ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Caption>Twitter</Caption>
            <FormField
              type="text"
              name="twitter"
              value={values.twitter}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Caption>Linkedin</Caption>
            <FormField
              type="text"
              name="linkedin"
              value={values.linkedin}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Caption>Website</Caption>
            <FormField
              type="text"
              name="website"
              value={values.website}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FieldArray
              name="experience"
              render={({ remove, push }) => (
                <Box>
                  {typeof values.experience !== "undefined" &&
                    values.experience.map((item, index) => (
                      <div key={index}>
                        <div>
                          <label htmlFor={`experience.${index}.position`}>
                            Position
                          </label>
                          <FormField
                            name={`experience.${index}.position`}
                            placeholder="e.g. Senior Developer"
                            type="text"
                          />
                        </div>
                        <div>
                          <label htmlFor={`experience.${index}.company`}>
                            Company
                          </label>
                          <FormField
                            name={`experience.${index}.company`}
                            placeholder="e.g. Microsoft"
                            type="text"
                          />
                        </div>
                        <div>
                          <label htmlFor={`experience.${index}.startDate`}>
                            Start Date
                          </label>
                          <FormField
                            name={`experience.${index}.startDate`}
                            placeholder="e.g. 14 August 2015"
                            type="text"
                          />
                        </div>
                        <div>
                          <label htmlFor={`experience.${index}.position`}>
                            End Date
                          </label>
                          <FormField
                            name={`experience.${index}.endDate`}
                            placeholder="e.g. 20 June 2019"
                            type="text"
                          />
                        </div>
                        <div>
                          <Button type="button" onClick={() => remove(index)}>
                            X
                          </Button>
                        </div>
                      </div>
                    ))}

                  <Button
                    type="button"
                    onClick={() =>
                      push({
                        position: "",
                        company: "",
                        startDate: "",
                        endDate: "",
                      })
                    }
                  >
                    Add Experience
                  </Button>
                </Box>
              )}
            />
            <Button
              onClick={(event) => {
                event.preventDefault()
                handleReset()
              }}
            >
              Reset
            </Button>
            <br />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
