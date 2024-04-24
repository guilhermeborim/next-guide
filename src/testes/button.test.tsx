import { fireEvent, render, screen } from '@testing-library/react'
import Button from './button'
describe("Button component", () => {
  it("should render the button", () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}/>)

    const button = screen.getByRole("button")

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledWith(10)
  })

  it("should render the button text", () => {
    render(<Button onClick={() => {}}/>)

    screen.getByText('Click me')

  })
})