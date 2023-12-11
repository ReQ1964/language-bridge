import styled from 'styled-components'

const DualRingSpinner = styled.div<{ $fullscreen?: boolean }>`
  position: ${(props) => (props.$fullscreen ? 'absolute' : '')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: ${(props) => props.theme.colors.text.tertiary} transparent
      ${(props) => props.theme.colors.text.tertiary} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const FullscreenContainer = styled.div`
  position: relative;
  height: 50vh;
`

export { DualRingSpinner, FullscreenContainer }
