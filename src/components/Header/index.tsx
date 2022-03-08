import Link from 'next/link'
import { Header as HeaderStyled } from './styles'
import { Button } from '../Button/index'
import { Location } from '../Location'

export function Header() {
  return (
    <HeaderStyled>
      <section>
        <Link href="/">
          <a>
            <img src="/images/logo.svg" alt="Logo Happy" />
          </a>
        </Link>

        <Location />
      </section>

      <Link href="/admin/login" passHref>
        <a>
          <Button
            bgColor="#12D4E0"
            textHoverColor="#15C3D6"
            hover="#96FEFF"
            width="222px"
            height="3.5rem"
            fontSize="1.25rem"
          >
            Acesso Restrito
          </Button>
        </a>
      </Link>
    </HeaderStyled>
  )
}
