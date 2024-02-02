import ProgressTile from '../ProgressTile/ProgressTile'
import { DataTilesSection, DataTilesUpperContainer } from './DataTiles.styles'
import dayjs from 'dayjs'
import { CalendarBlock } from './DataCalendar.styles'

const DataTiles = () => {
  return (
    <DataTilesSection>
      <DataTilesUpperContainer>
        <ProgressTile wordsQuantity={10} />
        <CalendarBlock
          defaultValue={undefined}
          disabledDate={(current) => {
            return dayjs() >= current || dayjs() <= current
          }}
          fullscreen={false}
          mode="month"
        />
      </DataTilesUpperContainer>
    </DataTilesSection>
  )
}

export default DataTiles
