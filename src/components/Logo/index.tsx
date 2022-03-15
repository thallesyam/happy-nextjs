import Link from 'next/link'

export function Logo({ canShowText = true, isSmallerLogo = false }) {
  const logoLink = canShowText
    ? '/images/logo.svg'
    : `/images/happy-icon${isSmallerLogo ? '-small' : ''}.svg`

  return (
    <Link href="/" passHref>
      <a>
        <img src={logoLink} alt="Logo Happy" />
      </a>
    </Link>
  )
}
