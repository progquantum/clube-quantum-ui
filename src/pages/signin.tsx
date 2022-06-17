import { GetServerSideProps } from 'next'

import { SignInPage } from 'layouts/SignIn'
import { withSSRGuest } from 'helpers/auth/withSSRGuest'

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {}
  }
})

export default function SignIn () {
  return (
    <SignInPage />
  )
}
