import Link from 'next/link'

export function Logo({ canShowText = true }) {
  const logoLink = canShowText ? '/images/logo.svg' : '/images/happy-icon.svg'

  return (
    <Link href="/" passHref>
      <a>
        <img src={logoLink} alt="Logo Happy" />
      </a>
    </Link>
  )
}
