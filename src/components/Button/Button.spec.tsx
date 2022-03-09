import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '.'

describe('Button component', () => {
  it('should render correctly text', () => {
    render(
      <Button width="fake-width" bgColor="fake-bg" textHoverColor="fake-hover">
        <p>fake-test-button</p>
      </Button>
    )

    expect(screen.getByText('fake-test-button')).toBeInTheDocument()
  })

  it('should call correctly function', () => {
    const handleFakeClick = jest.fn()

    handleFakeClick.mockReturnValueOnce('fake-test-return')

    render(
      <Button
        width="fake-width"
        bgColor="fake-bg"
        textHoverColor="fake-hover"
        onClick={handleFakeClick}
      >
        <p>fake-test-button</p>
      </Button>
    )

    const fakeButton = screen.getByText('fake-test-button')

    fireEvent.click(fakeButton)

    expect(handleFakeClick).toHaveBeenCalled()
    expect(handleFakeClick).toReturnWith('fake-test-return')
  })
})
