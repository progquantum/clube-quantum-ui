import { GetServerSideProps } from 'next'

import { withSSRAuth } from 'helpers/auth/withSSRAuth'
import { DashboardPage } from 'layouts/Dashboard'

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {}
  }
})

export default function Dashboard () {
  return <DashboardPage />
}
