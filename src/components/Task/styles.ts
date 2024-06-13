import styled, { css } from 'styled-components'
import * as T from './types'

export const TaskContainer = styled.main<T.TaskProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    color: ${theme.gray300};

    img {
      margin-bottom: 20px;
    }

    h1 {
      margin-bottom: 2px;
      font-size: 1.2rem;
    }
  `}
`
