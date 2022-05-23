import { useSession, signOut, signIn, getSession } from "next-auth/react"

import AppBar from "../components/AppBar";

export default function Home() {
  const { data: session, loading} = useSession()

  return (
    <>
    <AppBar/>
    {
      session
        ? <button onClick={() => signOut()} className="btn btn-info">Log out</button>
        : <button onClick={() => signIn()} className="btn btn-primary">Login</button>
    }
      <h1 className="">Starter Template</h1>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false
      }
    }
  }

  return {
    props: {session}
  }
}
