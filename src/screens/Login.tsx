import { RouteComponentProps } from '@reach/router'
import { useState } from 'react'
import { emailRegex, passRegex, handleKeyDown } from '../validations/validateLogin'
import '../styles.scss'

const Login = (props: RouteComponentProps) => {
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [messageEmail, setMessageEmail] = useState('')

  const [password, setPassword] = useState('')
  const [isValidPass, setIsValidPass] = useState(false)
  const [messagePass, setMessagePass] = useState('')

  const validateEmail = (event: any) => {
    const em = event.target.value
    if (emailRegex.test(em)) {
      setIsValidEmail(true)
      setMessageEmail('')
    } else {
      setIsValidEmail(false)
      setMessageEmail('Please enter a valid email')
    }
    if (email === '') {
      setMessageEmail('Please enter a valid email')
    }
  }

  const validatePassword = (event: any) => {
    const pass = event.target.value
    if (passRegex.test(pass)) {
      setIsValidPass(true)
      setMessagePass('')
    } else {
      setIsValidPass(false)
      setMessagePass('Please enter a valir password')
    }
    if (password === '') {
      setMessagePass('Please enter a valid password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3x1 font-extrabold text-grey-900">Sign in your account</h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="label">
                Email
                <input
                  onInput={validateEmail}
                  onChange={e => {
                    setEmail(e.target.value)
                  }}
                  onKeyDown={handleKeyDown}
                  id="email"
                  placeholder="Enter your Email Address..."
                  className="input"
                />
                <div className={`message ${isValidEmail ? 'success' : 'error'}`}> {messageEmail} </div>
              </label>
            </div>
            <div>
              <label htmlFor="password" className="label">
                Password
                <input
                  onInput={validatePassword}
                  onChange={e => {
                    setPassword(e.target.value)
                  }}
                  onKeyDown={handleKeyDown}
                  id="password"
                  placeholder="Enter your Password..."
                  className="input"
                />
                <div className={`message ${isValidPass ? 'success' : 'error'}`}> {messagePass} </div>
              </label>
            </div>
          </div>
          <div>
            <button type="submit" className="btn">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
