import React from 'react'
import { useFormik } from 'formik'

const initialValues = {
  firstName: '',
  lastName: '',
  age: '',
  email: '',
  confirmEmail: '',
  password: ''
}

const validate = (values) => {
  const errors = {}

  if (!values.firstName) errors.firstName = 'Required'
  if (!values.lastName) errors.lastName = 'Required'

  if (!values.age) {
    errors.age = 'Required'
  } else if (!/^[0-9]+$/.test(values.age)) {
    errors.age = 'Age must be a number'
  } else if (values.age < 13) {
    errors.age = 'Must be at least 13 years old'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email format'
  }

  if (!values.confirmEmail) {
    errors.confirmEmail = 'Required'
  } else if (values.confirmEmail !== values.email) {
    errors.confirmEmail = 'Emails must match'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
  }

  return errors
}

function Register() {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      console.log('Register Form Data:', values)
    }
  })

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block font-medium">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="w-full p-2 border rounded"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
            ) : null}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block font-medium">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="w-full p-2 border rounded"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
            ) : null}
          </div>

          {/* Age */}
          <div>
            <label htmlFor="age" className="block font-medium">Age</label>
            <input
              type="text"
              id="age"
              name="age"
              placeholder="Enter Age"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
              className="w-full p-2 border rounded"
            />
            {formik.touched.age && formik.errors.age ? (
              <div className="text-red-500 text-sm">{formik.errors.age}</div>
            ) : null}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full p-2 border rounded"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>

          {/* Confirm Email */}
          <div>
            <label htmlFor="confirmEmail" className="block font-medium">Confirm Email</label>
            <input
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              placeholder="Confirm Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmEmail}
              className="w-full p-2 border rounded"
            />
            {formik.touched.confirmEmail && formik.errors.confirmEmail ? (
              <div className="text-red-500 text-sm">{formik.errors.confirmEmail}</div>
            ) : null}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full p-2 border rounded"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            ) : null}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
