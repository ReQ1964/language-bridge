import { FunfactContainer } from './ArticleFunfact.styles'

const ArticleFunfact = ({ content }: { content: string }) => {
  return (
    <FunfactContainer>
      <h4>Did you know?</h4>
      <p>{content}</p>
    </FunfactContainer>
  )
}

export default ArticleFunfact
