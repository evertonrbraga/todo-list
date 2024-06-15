import { PlusCircle } from 'phosphor-react'
import * as T from './types'
import * as S from './styles'

export const Button: T.ButtonType = ({ onClick }) => {
  return (
    <S.ButtonContainer onClick={onClick}>
      <p>Criar</p>
      <PlusCircle size={22} aria-label='Ícone com sinal de mais' />
    </S.ButtonContainer>
  )
}
