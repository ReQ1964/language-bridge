import styled from 'styled-components'
import Image from 'next/image'

const Navbar = styled.nav`
  position: sticky;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: white;
  z-index: 999;
  padding: 0.8rem 0.1rem;
`

const NextImage = styled(Image)`
  cursor: pointer;
  margin-top: 5px;
`

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`

const AccountIcon = styled(Image)`
  cursor: pointer;
`

export { Navbar, NextImage, RightContainer, AccountIcon }
