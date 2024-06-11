import styled, { css } from 'styled-components'
import * as T from './types'

export const ButtonContainer = styled.main<T.ButtonProps>`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    padding: 12px 17px;
    border-radius: 8px;
    color: ${theme.white};
    background-color: ${theme.blueDark};

    p {
      font-size: 1.1rem;
    }
  `}
`
