import styled, { css } from 'styled-components'
import * as T from './types'

export const BackgroundTop = styled.div`
  ${({ theme }) => css`
    margin: 0;
    height: 200px;
    width: 100%;
    position: absolute;
    background-color: ${theme.gray700};
  `}
`

export const HomeContainer = styled.main<T.HomeProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    padding-top: 70px;

    img {
      margin-bottom: 60px;
    }

    hr {
      margin-top: 25px;
      width: 100%;
      border: 1px solid ${theme.gray400};
    }
  `}
`

export const FormContainer = styled.form`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    gap: 15px;

    input {
      flex-grow: 1;
      border: none;
      border-radius: 8px;
      background-color: ${theme.gray400};
      color: ${theme.gray100};
      padding-left: 15px;

      &::placeholder {
        color: ${theme.gray300};
      }
    }
  `}
`

export const TaskHeader = styled.div<T.HomeProps>`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;

  p,
  span {
    font-weight: bold;
  }
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
    margin-left: 8px;
    border-radius: 10px;
    color: ${theme.white};
    background-color: ${theme.gray400};
  `}
`
