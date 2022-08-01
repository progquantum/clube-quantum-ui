import { GetServerSideProps } from 'next'

import { SignUpPage } from 'layouts/SignUp'
import { withSSRGuest } from 'helpers/auth/withSSRGuest'

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {}
  }
})

export default function SignUp () {
  return (
    <SignUpPage />
  )
}
