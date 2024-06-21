import styled, { css } from 'styled-components'
import * as T from './types'

export const ButtonContainer = styled.button<T.ButtonProps>`
  ${({ theme, disabled }) => css`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    padding: 12px 17px;
    border: none;
    border-radius: 8px;
    color: ${theme.gray200};
    background-color: ${theme.blueDark};
    transition: 0.2s ease;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};

    &:hover {
      background-color: ${theme.blue};
    }

    p {
      font-size: 1.1rem;
    }
  `}
`
