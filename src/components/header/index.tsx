'use client'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { headerValidation } from '@/helpers/validations/header'
import { api } from '@/services/api'
import { add } from '@/store/reducers/user'

const Header = () => {
  const dispatch = useDispatch()

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      username: '',
    },
    validationSchema: headerValidation,
    onSubmit: values => {
      api.get(`users/${values.username}`)
        .then(({ data }) => dispatch(add(data)))
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
