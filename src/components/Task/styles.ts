import styled, { css } from 'styled-components'
import * as T from './types'

export const TaskContainer = styled.main<T.TaskProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    color: ${theme.gray300};

    h1 {
      font-size: 1.2rem;
    }
  `}
`
