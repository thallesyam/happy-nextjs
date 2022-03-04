import Head from 'next/head'
import { ReactNode } from 'react'

type ILayout = {
  children: ReactNode
  title: string
}

export function Layout({ children, title }: ILayout) {
  return (
    <>
      <Head>
        <title>{title} | Happy</title>
      </Head>

      {children}
    </>
  )
}
