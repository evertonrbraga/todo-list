import styled, { css } from 'styled-components'
import * as T from './types'

export const HeaderContainer = styled.main<T.HeaderProps>`
  ${({ theme }) => css`
    background: ${theme['gray-500']}  
  `}  
`