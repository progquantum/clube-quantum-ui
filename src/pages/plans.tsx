import { GetServerSideProps } from 'next'

import { PlansPage } from 'layouts/Plans'

import { withSSRAuth } from 'helpers/auth/withSSRAuth'

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {}
  }
})

export default function Plans () {
  return <PlansPage />
}
