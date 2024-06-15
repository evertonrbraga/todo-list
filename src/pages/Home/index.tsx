import { useState } from 'react'
import logoTodo from '../../assets/logo-todo.svg'
import { Button } from 'components/Button'
import { Task } from 'components/Task'
import * as T from './types'
import * as S from './styles'

export const Home: T.HomeType = () => {
  const [tasks, setTasks] = useState([])

  const handleCreateNewTask = event => {
    setTasks([...tasks, event.target.value])
  }

  return (
    <>
      <S.BackgroundTop />
      <S.HomeContainer>
        <img src={logoTodo} alt='Logo ToDo' />
        <S.FormContainer>
          <input type='text' placeholder='Adicione uma nova tarefa' />
          <Button onClick={handleCreateNewTask} />
        </S.FormContainer>
        <S.TaskHeader>
          <S.Created>
            <p>Tarefas criadas</p>
            <S.Counter aria-label='created-tasks'>{tasks.length}</S.Counter>
          </S.Created>
          <S.Finished>
            <p>Concluídas</p>
            <S.Counter aria-label='finished-tasks'>0</S.Counter>
          </S.Finished>
        </S.TaskHeader>
        <hr />
        <Task />
      </S.HomeContainer>
    </>
  )
}
