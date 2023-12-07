import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/config'
import withRouteProtection from '@/utils/withRouteProtection'

const AccountPage = () => {
  return <button onClick={() => signOut(auth)}>Click to logout</button>
}

export default withRouteProtection(AccountPage, '/auth', false)
