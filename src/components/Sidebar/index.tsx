import Link from 'next/link'
import { Button } from '../Button'
import { Logo } from '../Logo'
import { Container } from './styles'

export function Sidebar() {
  return (
    <Container>
      <Logo canShowText={false} isSmallerLogo />

      <Link href="/location" passHref>
        <a>
          <Button
            width="3rem"
            height="3rem"
            bgColor="#12AFCB"
            hover="#17D6EB"
            textHoverColor="#fff"
          >
            <svg
              data-testid="svg-testid"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12L5 12"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19L5 12L12 4.99999"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </a>
      </Link>
    </Container>
  )
}
