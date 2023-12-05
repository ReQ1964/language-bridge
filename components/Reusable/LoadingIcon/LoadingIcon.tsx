import { DualRingSpinner, FullscreenContainer } from './LoadingIcon.styles'

const LoadingIcon = ({ fullscreen }: { fullscreen?: boolean }) => {
  if (fullscreen) {
    return (
      <FullscreenContainer>
        <DualRingSpinner $fullscreen={fullscreen} data-testid="loading-icon" />
      </FullscreenContainer>
    )
  } else {
    return <DualRingSpinner data-testid="loading-icon" />
  }
}

export default LoadingIcon
