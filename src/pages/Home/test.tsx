import { render, screen } from 'project-testing-library'
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
})
