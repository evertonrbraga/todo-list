import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import logoTodo from '../../assets/logo-todo.svg'
import { Button } from 'components/Button'
import { Task } from 'components/Task'
import * as T from './types'
import * as S from './styles'
import { EmptySection } from 'components/EmptySection'

interface TaskProps {
  id: string
  description: string
  checked: boolean
}

export const Home: T.HomeType = () => {
  const [description, setDescription] = useState<string>('')
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }

  const handleCreateNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!description.trim()) return
    setTasks([...tasks, { id: uuidv4(), description, checked: false }])
    setDescription('')
  }

  return (
    <>
      <S.BackgroundTop />
      <S.HomeContainer>
        <img src={logoTodo} alt='Logo ToDo' />
        <S.FormContainer onSubmit={handleCreateNewTask}>
          <input
            type='text'
            name='description'
            onChange={handleInputChange}
            placeholder='Adicione uma nova tarefa'
          />
          <Button type='submit' disabled={!description} />
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
        {tasks.length > 0 ? <Task /> : <EmptySection />}
      </S.HomeContainer>
    </>
  )
}
