export function formatBankAccount(account: string) {
  let formattedaccount = account.replace(/[^\d]/g, '');
  const formataccountLenght = formattedaccount.length;

  if (formataccountLenght > 3) {
    formattedaccount = `${formattedaccount.slice(
      0,
      formataccountLenght - 1,
    )}-${formattedaccount.slice(-1)}`;
  }
  return formattedaccount;
}
