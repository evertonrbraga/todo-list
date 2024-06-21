import { render, screen } from 'project-testing-library'
import { EmptySection } from '.'

describe('<EmptySection />', () => {
  it('should snapshot the EmptySection component', () => {
    const { container } = render(<EmptySection />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should if the title is rendering correctly', () => {
    render(<EmptySection />)
    const title = screen.getByText('Você ainda não tem tarefas cadastradas')
    expect(title).toBeInTheDocument()
  })
})
