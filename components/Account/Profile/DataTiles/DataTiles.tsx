import ProgressTile from '../ProgressTile/ProgressTile'
import { DataTilesSection, DataTilesUpperContainer } from './DataTiles.styles'

const DataTiles = () => {
  return (
    <DataTilesSection>
      <DataTilesUpperContainer>
        <ProgressTile wordsQuantity={10} />
      </DataTilesUpperContainer>
    </DataTilesSection>
  )
}

export default DataTiles
