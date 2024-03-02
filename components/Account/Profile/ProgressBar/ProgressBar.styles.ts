import styled from 'styled-components'

const ProgressBarContainer = styled.div`
  position: relative;
  img {
    position: absolute;
  }
  img:nth-of-type(1) {
    right: 96px;
    top: 70px;
  }
  img:nth-of-type(2) {
    right: 102px;
    top: 30px;
  }
  img:nth-of-type(3) {
    right: 65px;
    top: -7px;
  }
  img:nth-of-type(4) {
    right: 13px;
    top: 2px;
  }
  img:nth-of-type(5) {
    right: -10px;
    top: 43px;
  }
  img:nth-of-type(6) {
    right: 8px;
    top: 88px;
  }
`

export { ProgressBarContainer }
