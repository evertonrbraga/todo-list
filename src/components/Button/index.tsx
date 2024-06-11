import { PlusCircle } from 'phosphor-react'
import * as T from './types'
import * as S from './styles'

export const Button: T.ButtonType = () => {
  return (
    <S.ButtonContainer>
      <p>Criar</p>
      <PlusCircle size={22} aria-label='Ícone com sinal de mais' />
    </S.ButtonContainer>
  )
}
