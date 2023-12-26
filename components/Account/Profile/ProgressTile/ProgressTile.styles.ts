import styled from 'styled-components'

const ProgressTileContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: white;
  min-width: 260px;
`

const LanguageParagraph = styled.p`
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid grey;
  text-align: center;
  padding-bottom: 1rem;
`

const LanguageContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  color: ${(props) => props.theme.colors.background.primary.shade1};
`

export { ProgressTileContainer, LanguageContainer, LanguageParagraph }
