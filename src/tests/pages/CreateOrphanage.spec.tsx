import { render, screen, waitFor, fireEvent, act } from '@testing-library/react'
import CreateOrphanage from '../../pages/create/orphanage'

async function getTextInput(label: string) {
  const input = screen.getByLabelText(label)

  return input
}

describe('CreateOrphanage component', () => {
  const onSubmitTest = jest.fn()

  beforeEach(() => {
    onSubmitTest.mockClear()
  })

  it('should render correctly text form', async () => {
    render(<CreateOrphanage />)

    const text = await waitFor(() => screen.getByText('Adicione um orfanato'))

    expect(text).toBeInTheDocument()
  })

  it('should render correctly filled field', async () => {
    render(<CreateOrphanage onSubmitTest={onSubmitTest} />)

    await act(async () => {
      const name = await getTextInput('Nome')
      const about = await getTextInput('Sobre')
      const phone = await getTextInput('Número de Whatsapp')
      const instruction = await getTextInput('Instruções')
      const hour = await getTextInput('Horário das visitas')
      const afirmativeButton = screen.getByTestId('afirmative-testid')

      const button = screen.getByTestId('submit-testid')

      fireEvent.change(name, { target: { value: 'Thalles' } })
      fireEvent.change(about, { target: { value: 'Teste Sobre' } })
      fireEvent.change(phone, { target: { value: '11932245266' } })
      fireEvent.change(instruction, { target: { value: 'Teste instruções' } })
      fireEvent.change(hour, { target: { value: 'Das 09 às 18' } })

      fireEvent.click(afirmativeButton)
      fireEvent.click(button)

      await waitFor(() => {
        expect(onSubmitTest).toBeCalledTimes(1)
      })

      expect(onSubmitTest).toBeCalledWith({
        about: 'Teste Sobre',
        open_on_weekends: true,
        images: [],
        hours: 'Das 09 às 18',
        instruction: 'Teste instruções',
        name: 'Thalles',
        phone: '(11) 93224-5266',
        position: {
          latitude: 0,
          longitude: 0,
        },
      })
    })
  })

  it('should render open on weeks false', async () => {
    render(<CreateOrphanage onSubmitTest={onSubmitTest} />)

    await act(async () => {
      const name = await getTextInput('Nome')
      const about = await getTextInput('Sobre')
      const phone = await getTextInput('Número de Whatsapp')
      const instruction = await getTextInput('Instruções')
      const hour = await getTextInput('Horário das visitas')
      const negativeButton = screen.getByTestId('negative-testid')
      const button = screen.getByTestId('submit-testid')

      fireEvent.change(name, { target: { value: 'Thalles' } })
      fireEvent.change(about, { target: { value: 'Teste Sobre' } })
      fireEvent.change(phone, { target: { value: '11932245266' } })
      fireEvent.change(instruction, { target: { value: 'Teste instruções' } })
      fireEvent.change(hour, { target: { value: 'Das 09 às 18' } })

      fireEvent.click(negativeButton)
      fireEvent.click(button)

      await waitFor(() => {
        expect(onSubmitTest).toBeCalledTimes(1)
      })

      expect(onSubmitTest).toBeCalledWith({
        about: 'Teste Sobre',
        open_on_weekends: false,
        images: [],
        hours: 'Das 09 às 18',
        instruction: 'Teste instruções',
        name: 'Thalles',
        phone: '(11) 93224-5266',
        position: {
          latitude: 0,
          longitude: 0,
        },
      })
    })
  })
})
