export function formatBankAccount(account: string) {
  let formattedAccount = account.replace(/\D/g, '');
  const formattedAccountLength = formattedAccount.length;
  const accountLength = account.length;

  if (formattedAccountLength >= 7) {
    formattedAccount = formattedAccount.replace(/(\d{7})(\d{1,1})/g, '$1-$2');
  }

  if (accountLength > 9) {
    formattedAccount = formattedAccount.substring(0, accountLength - 1);
  }
  return formattedAccount;
}
