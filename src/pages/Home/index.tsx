import logoTodo from '../../assets/logo-todo.svg'
import { Button } from 'components/Button'
import * as T from './types'
import * as S from './styles'
import { Task } from 'components/Task'

export const Home: T.HomeType = () => {
  return (
    <S.HomeContainer>
      <img src={logoTodo} alt='Logo ToDo' />
      <input type='text' placeholder='Adicione uma nova tarefa' />
      <Button />
      <p>Tarefas criadas</p>
      <span>0</span>
      <p>Concluídas</p>
      <span>0</span>
      );
      <Task />
    </S.HomeContainer>
  )
}
