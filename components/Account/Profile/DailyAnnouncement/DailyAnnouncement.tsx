import { auth } from '@/firebase/config'
import Image from 'next/image'
import daily_anoucement from '@/public/images/daily_annoucement.png'
import { DailyAnnoucementContainer } from './DailyAnnouncement.styles'

const DailyAnnouncement = ({
  textsQuantity,
  wordsQuantity,
}: {
  textsQuantity: number
  wordsQuantity: number
}) => {
  return (
    <DailyAnnoucementContainer>
      <div>
        <h3>Hi {auth.currentUser?.displayName}!</h3>
        <p>
          You have read {textsQuantity} texts today, which is {wordsQuantity} words!
        </p>
      </div>
      <Image src={daily_anoucement} alt="A picture with people working" height={100} width={100} />
    </DailyAnnoucementContainer>
  )
}

export default DailyAnnouncement
