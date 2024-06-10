import { PlusCircle } from 'phosphor-react'
import * as T from './types'
import * as S from './styles'

export const Button: T.ButtonType = () => {
  return (
    <S.ButtonContainer>
      <h1>Criar</h1>
      <PlusCircle size={32} aria-label='Ícone com sinal de mais' />
    </S.ButtonContainer>
  )
}
