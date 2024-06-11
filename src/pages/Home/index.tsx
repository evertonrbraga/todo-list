import logoTodo from '../../assets/logo-todo.svg'
import { Button } from 'components/Button'
import * as T from './types'
import * as S from './styles'
import { Task } from 'components/Task'

export const Home: T.HomeType = () => {
  return (
    <S.HomeContainer>
      <img src={logoTodo} alt='Logo ToDo' />
      <S.FormContainer>
        <input type='text' placeholder='Adicione uma nova tarefa' />
        <Button />
      </S.FormContainer>
      <S.TaskContainer>
        <S.Created>
          <p>Tarefas criadas</p>
          <S.Counter>0</S.Counter>
        </S.Created>
        <S.Finished>
          <p>Concluídas</p>
          <S.Counter>0</S.Counter>
        </S.Finished>
      </S.TaskContainer>
      <hr />
      <Task />
    </S.HomeContainer>
  )
}
