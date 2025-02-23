import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { fetchUserProfile } from "../store/slices/authSlice"
import api from "../utils/api"

const ProfileSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  dateOfBirth: Yup.date().required("Required"),
  gender: Yup.string().oneOf(["male", "female", "other"]).required("Required"),
})

const Profile = () => {
  const dispatch = useDispatch()
  const { user, loading } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(fetchUserProfile())
  }, [dispatch])

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      await api.patch("/users/profile", values)
      dispatch(fetchUserProfile())
      setStatus({ success: "Profile updated successfully" })
    } catch (error) {
      setStatus({ error: error.response.data.message || "An error occurred" })
    } finally {
      setSubmitting(false)
    }
  }

  if (loading || !user) {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Profile</h1>
      <Formik
        initialValues={{
          name: user.name,
          email: user.email,
          dateOfBirth: user.dateOfBirth.split("T")[0],
          gender: user.gender,
        }}
        validationSchema={ProfileSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, status }) => (
          <Form className="space-y-4">
            {status && status.error && <div className="text-red-500 text-center mb-4">{status.error}</div>}
            {status && status.success && <div className="text-green-500 text-center mb-4">{status.success}</div>}
            <div>
              <Field
                name="name"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.name && touched.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
            </div>
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.email && touched.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
            </div>
            <div>
              <Field
                name="dateOfBirth"
                type="date"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.dateOfBirth && touched.dateOfBirth && (
                <div className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</div>
              )}
            </div>
            <div>
              <Field
                name="gender"
                as="select"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
              {errors.gender && touched.gender && <div className="text-red-500 text-sm mt-1">{errors.gender}</div>}
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              Update Profile
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Profile

