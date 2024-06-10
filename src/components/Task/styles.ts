import styled, { css } from 'styled-components'
import * as T from './types'

export const TaskContainer = styled.main<T.TaskProps>`
  ${({ theme }) => css`
    background: ${theme['gray500']};
  `}
`
