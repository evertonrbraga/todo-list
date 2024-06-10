import styled, { css } from 'styled-components'
import * as T from './types'

export const ButtonContainer = styled.main<T.ButtonProps>`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.blueDark};
  `}
`
