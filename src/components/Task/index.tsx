import clipboard from '../../assets/clipboard.svg'
import * as T from './types'
import * as S from './styles'

export const Task: T.TaskType = () => {
  return (
    <S.TaskContainer>
      <img src={clipboard} alt='Ícone prancheta' />
      <h1>Você ainda não tem tarefas cadastradas</h1>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </S.TaskContainer>
  )
}
