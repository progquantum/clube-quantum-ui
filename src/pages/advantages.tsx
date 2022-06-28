import { GetServerSideProps } from 'next'

import { withSSRGuest } from 'helpers/auth/withSSRGuest'
import { BancoUmAdvantagesPage } from 'layouts/Advantages'

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {}
  }
})

export default function BancoUmAdvantages () {
  return (
    <BancoUmAdvantagesPage />
  )
}
