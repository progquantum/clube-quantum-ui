import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { StoreDetails } from 'layouts/StoreDetails';

import { roles } from 'constants/roles';
import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { MARKETPLACE_PAGE } from 'constants/routesPath';
import { useGetEstablishmentProfile } from 'hooks/establishment/useGetEstablishmentProfile';

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async (ctx: GetServerSidePropsContext) => {
    if (!ctx.query.id)
      return {
        redirect: {
          destination: MARKETPLACE_PAGE,
          permanent: false,
        },
      };

    const establishmentId = Array.isArray(ctx.query.id)
      ? ctx.query.id[0]
      : ctx.query.id;

    return {
      props: {
        establishmentId,
      },
    };
  },
  {
    roles: [roles.user.id],
  },
);

export default function StoreDetailsPage({ establishmentId }) {
  const { data } = useGetEstablishmentProfile(establishmentId);
  return <StoreDetails establishment={data} />;
}
