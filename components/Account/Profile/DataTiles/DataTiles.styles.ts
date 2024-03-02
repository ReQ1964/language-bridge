import styled from 'styled-components'

const DataTilesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: ${(props) => props.theme.sizes.defaultMargins};
`

const DataTilesUpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: row;
  }
`

export { DataTilesSection, DataTilesUpperContainer }
