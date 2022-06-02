import { PropsWithChildren } from 'react'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'

import { StyledProvider } from './styles'

export function AppProvider ({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <StyledProvider>{children}</StyledProvider>
    </>
  )
}
