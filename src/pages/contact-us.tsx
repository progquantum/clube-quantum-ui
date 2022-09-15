import { GetServerSideProps } from 'next'

import { withSSRAuth } from 'helpers/auth/withSSRAuth'
import { ContactUsPage } from 'layouts/ContactUs'

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {}
  }
})

export default function ContactUs () {
  return <ContactUsPage />
}
