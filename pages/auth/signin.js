// import { useState } from 'react'
// import { useRouter } from 'next/router'
// import { signIn } from '../../services/authServices'

import { getProviders, signIn, getCsrfToken } from "next-auth/react"


export default function SignIn({ csrfToken }) {
  // const router = useRouter()

  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  // const handleLogin = async (e) => {
  //   e.preventDefault()
  //   let credentials = { username, password }
  //   const res = await signIn(credentials)
  //   if (res.status !== 200)
  //     return false

  //   router.push('/')
  // }

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="sign-in card shadow-sm">
        <div className="card-header"><span>Sign In</span></div>
        <div className="card-body">
          <form method="post" action="/api/auth/callback/credentials">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <div className="input-group mb-3">
              <span className="input-group-text" id="username"><i className="bi bi-person"></i></span>
              <input 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Username"
                name="username"
                aria-describedby="username" 
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="password"><i className="bi bi-lock"></i></span>
              <input 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Password" 
                name="password"
                aria-describedby="password" 
              />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value=""/>
                <label className="form-check-label">Remember me</label>
              </div>
              <a><p>Forgot Password ?</p></a>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary w-100 shadow rounded">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context)
    }
  }
}
