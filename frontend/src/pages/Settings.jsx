import { useState } from "react"
import { useDispatch } from "react-redux"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import api from "../utils/api"
import { logout } from "../store/slices/authSlice"

const PasswordChangeSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Required"),
  newPassword: Yup.string().min(6, "Too Short!").required("Required"),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Required"),
})

const Settings = () => {
  const dispatch = useDispatch()
  const [message, setMessage] = useState(null)

  const handlePasswordChange = async (values, { setSubmitting, resetForm }) => {
    try {
      await api.post("/users/change-password", values)
      setMessage({ type: "success", text: "Password changed successfully" })
      resetForm()
    } catch (error) {
      setMessage({ type: "error", text: error.response.data.message || "An error occurred" })
    } finally {
      setSubmitting(false)
    }
  }

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      try {
        await api.delete("/users/delete-account")
        dispatch(logout())
      } catch (error) {
        setMessage({ type: "error", text: error.response.data.message || "An error occurred" })
      }
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Settings</h1>
      {message && (
        <div className={`text-center mb-4 ${message.type === "success" ? "text-green-500" : "text-red-500"}`}>
          {message.text}
        </div>
      )}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
        <Formik
          initialValues={{
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
          }}
          validationSchema={PasswordChangeSchema}
          onSubmit={handlePasswordChange}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">
              <div>
                <Field
                  name="currentPassword"
                  type="password"
                  placeholder="Current Password"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                {errors.currentPassword && touched.currentPassword && (
                  <div className="text-red-500 text-sm mt-1">{errors.currentPassword}</div>
                )}
              </div>
              <div>
                <Field
                  name="newPassword"
                  type="password"
                  placeholder="New Password"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                {errors.newPassword && touched.newPassword && (
                  <div className="text-red-500 text-sm mt-1">{errors.newPassword}</div>
                )}
              </div>
              <div>
                <Field
                  name="confirmNewPassword"
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                {errors.confirmNewPassword && touched.confirmNewPassword && (
                  <div className="text-red-500 text-sm mt-1">{errors.confirmNewPassword}</div>
                )}
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
              >
                Change Password
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Delete Account</h2>
        <p className="mb-4 text-gray-600">
          Warning: This action cannot be undone. All your data will be permanently deleted.
        </p>
        <button
          onClick={handleDeleteAccount}
          className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
        >
          Delete Account
        </button>
      </div>
    </div>
  )
}

export default Settings

