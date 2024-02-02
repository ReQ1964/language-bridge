import styled from 'styled-components'
import { Calendar } from 'antd'

const CalendarBlock = styled(Calendar)`
  min-width: 260px;
  padding: 0.7rem;
  .ant-picker-date-panel .ant-picker-cell:not(.ant-picker-cell-in-view) .ant-picker-cell-inner {
    display: none;
  }

  .ant-picker-date-panel .ant-picker-cell:not(.ant-picker-cell-in-view) {
    pointer-events: none;
  }

  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
    background-color: white;
    color: black;
    &::before {
      border: none;
    }
  }

  .ant-picker-cell-disabled::before {
    background-color: white;
  }

  .ant-picker-cell-disabled {
    color: black;
  }
  td[title='2024-01-01'].ant-picker-cell-disabled {
    color: red;
  }
`

export { CalendarBlock }
