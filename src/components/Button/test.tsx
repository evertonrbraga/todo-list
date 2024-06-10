import { render, screen } from 'project-testing-library'
import { Button } from '.'

describe('<Button />', () => {
  it('should snapshot the Button component', () => {
    const { container } = render(<Button />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should the title renders correctly', () => {
    render(<Button />)
    const title = screen.getByText('Criar')
    expect(title).toBeInTheDocument()
  })

  it('should render the icon correctly', () => {
    render(<Button />)
    const icon = screen.getByLabelText('Ícone com sinal de mais')
    expect(icon).toBeInTheDocument()
  })
})
