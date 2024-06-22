import { PlusCircle } from 'phosphor-react'
import * as T from './types'
import * as S from './styles'
import React from 'react'

export const Button: React.FC<T.ButtonProps> = ({ onClick, disabled }) => {
  return (
    <S.ButtonContainer onClick={onClick} disabled={disabled}>
      <p>Criar</p>
      <PlusCircle size={22} aria-label='Ícone com sinal de mais' />
    </S.ButtonContainer>
  )
}
