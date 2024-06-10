import { render, screen } from 'project-testing-library'
import { Header } from '.'

describe('<Header />', () => {
  it('should snapshot the Header component', () => {
    const { container } = render(<Header />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should if the title is rendering correctly', () => {
    render(<Header />)
    const title = screen.getByText('Header')
    expect(title).toBeInTheDocument()
  })
})