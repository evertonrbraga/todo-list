import { fireEvent, render, screen } from 'project-testing-library'
import { Home } from '.'

describe('<Home />', () => {
  it('should snapshot the Home page', () => {
    const { container } = render(<Home />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the todo logo correctly', () => {
    render(<Home />)
    const svgImg = 'test-file-stub'
    const altText = 'Logo ToDo'
    const imageElement = screen.getByAltText(altText)
    expect(imageElement).toHaveAttribute('src', svgImg)
  })

  it('should render the input correctly', () => {
    render(<Home />)
    const placeholder = 'Adicione uma nova tarefa'
    const input = screen.getByPlaceholderText(placeholder)
    expect(input).toBeInTheDocument()
  })

  it('should check if the created tasks control works properly', () => {
    render(<Home />)
    const taskLabel = screen.getByText('Tarefas criadas')
    const taskQuantity = screen.getAllByText('0')[0]
    expect(taskLabel).toBeInTheDocument()
    expect(taskQuantity).toHaveTextContent('0')
  })

  it('should check if the finished tasks control works properly', () => {
    render(<Home />)
    const finishedLabel = screen.getByText('Concluídas')
    const finishedQuantity = screen.getAllByText('0')[1]
    expect(finishedLabel).toBeInTheDocument()
    expect(finishedQuantity).toHaveTextContent('0')
  })

  it('should check if the input field is working properly', () => {
    render(<Home />)
    const input = screen.getByPlaceholderText('Adicione uma nova tarefa')
    expect(input).toHaveValue('')
    fireEvent.change(input, { target: { value: 'Task one' } })
    expect(input).toHaveValue('Task one')
  })

  it('should create a new task', () => {
    render(<Home />)
    const input = screen.getByPlaceholderText('Adicione uma nova tarefa')
    const button = screen.getByText('Criar')
    const createdTasks = screen.getByLabelText('created-tasks')
    expect(createdTasks).toHaveTextContent('0')
    fireEvent.change(input, { target: { value: 'Task one' } })
    fireEvent.click(button)
    expect(input).toHaveValue('Task one')
    expect(createdTasks).toHaveTextContent('1')
  })

  it('should check if there are no tasks to show', () => {
    render(<Home />)
    const empty = screen.getByText('Você ainda não tem tarefas cadastradas')
    expect(empty).toBeInTheDocument()
  })

  it('should disable the create button if the input is empty', () => {
    render(<Home />)
    const buttonContainer = screen.getByText('Criar').closest('button')
    const input = screen.getByPlaceholderText('Adicione uma nova tarefa')
    expect(buttonContainer).toBeDisabled()
    fireEvent.change(input, { target: { value: 'Task 1' } })
    expect(buttonContainer).not.toBeDisabled()
  })

  it('should check if there are tasks to show', () => {
    render(<Home />)
    const input = screen.getByPlaceholderText('Adicione uma nova tarefa')
    const button = screen.getByText('Criar')
    const empty = screen.queryByText('Você ainda não tem tarefas cadastradas')
    fireEvent.change(input, { target: { value: 'Task one' } })
    fireEvent.click(button)
    expect(empty).not.toBeInTheDocument()
  })
})
