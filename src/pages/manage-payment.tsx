import { GetServerSideProps } from 'next'

import { ManagePaymentPage } from 'layouts/ManagePayment'

import { withSSRAuth } from 'helpers/auth/withSSRAuth'

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {}
  }
})

export default function ManagePayment () {
  return <ManagePaymentPage />
}
