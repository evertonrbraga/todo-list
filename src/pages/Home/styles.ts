import styled, { css } from 'styled-components'
import * as T from './types'

export const HomeContainer = styled.main<T.HomeProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    margin: 50px auto 0;
    background-color: ${theme.gray600};

    img {
      margin-bottom: 50px;
    }

    hr {
      border: 2px solid ${theme.gray400};
      width: 100%;
    }
  `}
`

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    gap: 15px;

    input {
      flex-grow: 1;
      border: none;
      border-radius: 8px;
      background-color: ${theme.gray400};

      &::placeholder {
        color: red;
      }
    }
  `}
`

export const TaskContainer = styled.div<T.HomeProps>`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;

    p,
    span {
      font-weight: bold;
    }
  `}
`
export const Created = styled.div<T.HomeProps>`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    p {
      color: ${theme.blue};
    }
  `}
`
export const Finished = styled.div<T.HomeProps>`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    p {
      color: ${theme.purple};
    }
  `}
`

export const Counter = styled.span`
  ${({ theme }) => css`
    padding: 4px 12px;
    margin-left: 5px;
    border-radius: 10px;
    color: ${theme.white};
    background-color: ${theme.gray400};
  `}
`
