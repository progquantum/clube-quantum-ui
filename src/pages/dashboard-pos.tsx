import { GetServerSideProps } from 'next';

import { DashboardPos } from 'layouts/DashboardPos';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => ({
  props: {},
}));

export default function DashboardPosPage() {
  return <DashboardPos />;
}
