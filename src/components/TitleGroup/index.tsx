import { Container } from './styles'

type TitleFormProps = {
  title: string
  isNotShowBorder?: boolean
}

export function TitleForm({ title, isNotShowBorder = false }: TitleFormProps) {
  return (
    <Container>
      <h1>{title}</h1>

      {!isNotShowBorder && <div />}
    </Container>
  )
}
