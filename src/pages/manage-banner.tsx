import { ManageBannerPage } from 'layouts/ManageBanner';

export async function getServerSideProps() {
  return { props: {} };
}

export default function ManageBanner() {
  return <ManageBannerPage />;
}
