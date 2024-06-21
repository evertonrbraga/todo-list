import clipboard from '../../assets/clipboard.svg'
import * as T from './types'
import * as S from './styles'

export const EmptySection: T.EmptySectionType = () => {
  return (
    <S.EmptySectionContainer>
      <img src={clipboard} alt='Ícone prancheta' />
      <h1>Você ainda não tem tarefas cadastradas</h1>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </S.EmptySectionContainer>
  )
}
