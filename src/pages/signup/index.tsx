import { GetServerSideProps } from 'next'

import { SignUpPage } from 'layouts/SignUp'
import { withSSRGuest } from 'helpers/auth/withSSRGuest'
import { checkInviteCode } from 'services/resources'
import { INVITE_NOT_FOUND_PAGE } from 'constants/routesPath'

export const getServerSideProps: GetServerSideProps = withSSRGuest(async (ctx) => {
  const { invite } = ctx.query

  if (!invite) {
    return {
      props: {}
    }
  }

  const { is_valid } = await checkInviteCode(invite)

  if (!is_valid) {
    return {
      redirect: {
        destination: INVITE_NOT_FOUND_PAGE,
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
})

export default function SignUp () {
  return (
    <SignUpPage />
  )
}
