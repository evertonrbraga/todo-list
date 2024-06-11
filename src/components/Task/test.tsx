import { render, screen } from 'project-testing-library'
import { Task } from '.'

describe('<Task />', () => {
  it('should snapshot the Task component', () => {
    const { container } = render(<Task />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should check if the empty layout is rendering correctly', () => {
    render(<Task />)
    const svgImg = 'test-file-stub'
    const title = screen.getByText('Você ainda não tem tarefas cadastradas')
    const text = screen.getByText('Crie tarefas e organize seus itens a fazer')
    const clipboardIcon = screen.getByAltText('Ícone prancheta')
    expect(title).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(clipboardIcon).toHaveAttribute('src', svgImg)
  })
})
