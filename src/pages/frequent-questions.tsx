import { GetServerSideProps } from 'next';

import { FrequentQuestionsPage } from 'layouts/FrequentQuestions';
import { withSSRGuest } from 'helpers/auth/withSSRGuest';

export const getServerSideProps: GetServerSideProps = withSSRGuest(
  async () => ({
    props: {},
  }),
);

export default function FrequentQuestions() {
  return <FrequentQuestionsPage />;
}
