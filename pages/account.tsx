import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/config'

const account = () => {
  return <button onClick={() => signOut(auth)}>Click to logout</button>
}

export default account
