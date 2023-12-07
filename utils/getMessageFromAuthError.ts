export const getMessageFromErrorCode = (errorCode: string) => {
  switch (errorCode) {
    case 'account-exists-with-different-credential':
    case 'auth/email-already-exists':
      return 'Email already used. Go to the login page.'
    case 'auth/invalid-credential':
      return 'Wrong email/password combination.'
    case 'auth/user-not-found':
      return 'No user found with this email.'
    case 'auth/too-many-requests':
      return 'Too many requests to log into this account.'
    case 'auth/internal-error':
      return 'Server error, please try again later.'
    case 'auth/invalid-email':
      return 'Email address is invalid.'
    default:
      return 'Login failed. Please try again.'
  }
}
