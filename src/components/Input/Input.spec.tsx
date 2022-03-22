import { render, screen } from '@testing-library/react'
import { FieldError } from 'react-hook-form'
import { Input } from '.'

describe('Input component', () => {
  it('should render correctly error message', () => {
    const errors: FieldError = {
      message: 'Invalid name',
      ref: undefined,
      type: 'required',
    }

    render(<Input error={errors} name="name" labelName="Nome" />)

    expect(screen.getByText('Invalid name')).toBeInTheDocument()
  })

  it('not should render correctly error message', () => {
    const errors: FieldError = {
      message: undefined,
      ref: undefined,
      type: undefined,
    }

    render(<Input error={errors} name="name" labelName="Nome" />)

    expect(screen.queryByText('Invalid name')).not.toBeInTheDocument()
  })
})
