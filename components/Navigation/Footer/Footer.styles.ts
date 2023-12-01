import styled from 'styled-components'

const FooterSection = styled.footer`
  padding: 1.5rem;
  color: ${(props) => props.theme.colors.text.secondary};
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.background.primary.color},
    ${(props) => props.theme.colors.background.primary.shade1}
  );
  a {
    color: ${(props) => props.theme.colors.text.secondary};
  }
  span {
    font-size: 1.5rem;
  }
`

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  margin-bottom: 1.8rem;
`

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const TermsAndConditionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.8rem;
`

const BottomContainer = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.background.primary.tint2};
  margin: 0 -1.5rem 0 -1.5rem;
  padding: 0.8rem 1.5rem 0 1.5rem;
`

export {
  FooterSection,
  ContactContainer,
  SocialsContainer,
  TermsAndConditionsContainer,
  BottomContainer,
}
