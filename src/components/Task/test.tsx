import { render, screen } from 'project-testing-library'
import { Task } from '.'

describe('<Task />', () => {
  it('should snapshot the Task component', () => {
    const { container } = render(<Task />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should check if the empty layout is rendering correctly', () => {
    render(<Task />)
    const title = screen.getByText('Você ainda não tem tarefas cadastradas')
    const text = screen.getByText('Crie tarefas e organize seus itens a fazer')
    expect(title).toBeInTheDocument()
  })
})
