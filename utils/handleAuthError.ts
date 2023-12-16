import { getMessageFromErrorCode } from './getMessageFromAuthError'

export const handleAuthError = (errorCode: string, setError: (errorMessage: string) => void) => {
  console.error(`Authentication error: ${errorCode}`)
  const errorMessage = getMessageFromErrorCode(errorCode)
  setError(errorMessage)
}
