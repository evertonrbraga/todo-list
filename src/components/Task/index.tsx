import * as T from './types'
import * as S from './styles'

export const Task: T.TaskType = () => {
  return (
    <S.TaskContainer>
      <h1>Você ainda não tem tarefas cadastradas</h1>
    </S.TaskContainer>
  )
}
