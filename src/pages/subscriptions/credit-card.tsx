import { GetServerSideProps } from 'next'

import { withSSRAuth } from 'helpers/auth/withSSRAuth'
import { CreditCardPage } from 'layouts/Subscriptions/CreditCard'

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {}
  }
})

export default function CreditCard () {
  return <CreditCardPage />
}
