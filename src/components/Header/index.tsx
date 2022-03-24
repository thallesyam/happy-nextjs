import Link from 'next/link'
import { Header as HeaderStyled } from './styles'
import { Button } from '../Button'
import { Location } from '../Location'
import { Logo } from '../Logo'

export function Header() {
  return (
    <HeaderStyled>
      <section>
        <Logo />

        <Location />
      </section>

      <Button
        disabled
        bgColor="#12D4E0"
        textHoverColor="#15C3D6"
        hover="#96FEFF"
        width="222px"
        height="3.5rem"
        fontSize="1.25rem"
      >
        Acesso Restrito
      </Button>
    </HeaderStyled>
  )
}
