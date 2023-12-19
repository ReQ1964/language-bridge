import styled from 'styled-components'

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1.6rem;
`

const UserAvatar = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  background-color: #9e8e6a;
  border-radius: 100%;
  p {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    font-size: 4rem;
    color: ${(props) => props.theme.colors.text.secondary};
  }
`

export { UserAvatar, ProfileContainer }
