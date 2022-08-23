import { GetServerSideProps } from 'next'

import { FinishedPage } from 'layouts/Subscriptions/Finished'
import { withSSRAuth } from 'helpers/auth/withSSRAuth'

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {}
  }
})

export default function Finished () {
  return <FinishedPage />
}
