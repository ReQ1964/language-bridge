import { ReactNode } from 'react'
import { ErrorParagraph } from './ErrorText.style'

const ErrorText = ({ children }: { children: ReactNode }) => {
  return <ErrorParagraph>{children}</ErrorParagraph>
}

export default ErrorText
