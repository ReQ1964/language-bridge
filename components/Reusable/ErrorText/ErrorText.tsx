import { ReactNode } from 'react'
import { ErrorParagraph } from './ErrorTexts.style'

const ErrorText = ({ children }: { children: ReactNode }) => {
  return <ErrorParagraph>{children}</ErrorParagraph>
}

export default ErrorText
