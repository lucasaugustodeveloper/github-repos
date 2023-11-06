'use client'
import { useFormik } from 'formik'
import { headerValidation } from '@/helpers/validations/header'

const Header = () => {
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      username: '',
    },
    validationSchema: headerValidation,
    onSubmit: values => {
      console.log('values', values)
    }
  })

  return (
    <header className="flex justify-center py-10 w-full bg-gray-100">
      <form onSubmit={handleSubmit}>
        <input
          className="p-3 rounded-md"
          type="text"
          placeholder="enter username in github"
          name="username"
          value={values.username}
          onChange={handleChange}
        />

        {errors.username && (
          <span className='block mt-2 text-red-500'>{errors.username}</span>
        )}
      </form>
    </header>
  )
}

export default Header
