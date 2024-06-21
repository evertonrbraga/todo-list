import { render, screen } from 'project-testing-library'
import { Task } from '.'

describe('<Task />', () => {
  it('should snapshot the Task component', () => {
    const { container } = render(<Task />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should check if the empty layout is rendering correctly', () => {
    render(<Task />)
    const title = screen.getByText('Task')
    expect(title).toBeInTheDocument()
  })
})
