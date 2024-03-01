import { parseCookies } from 'nookies';

import { FrequentQuestionsPage } from 'layouts/FrequentQuestions';
import { TOKEN_STORAGE_KEY } from 'constants/storage';
import { FrequentQuestionsAuthPage } from 'layouts/FrequentQuestions/FrequentQuestionsAuth';

export const getServerSideProps = async (ctx: any) => {
  const cookies = parseCookies(ctx);
  const token = cookies[TOKEN_STORAGE_KEY] || null;
  return {
    props: { token },
  };
};

export type TokenType = {
  token: string;
};
export default function FrequentQuestions({ token }: TokenType) {
  return token ? <FrequentQuestionsAuthPage /> : <FrequentQuestionsPage />;
}
