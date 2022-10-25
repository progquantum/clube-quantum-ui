import { getTime, addSeconds } from 'date-fns';

import { DEFAULT_SECONDS_TO_RESEND_CONFIRMATION } from 'constants/confirmations';

/**
 * Returns a expiry timestamp for confirmations links
 */

export const getExpiryConfirmationTimestamp = (): number =>
  getTime(addSeconds(new Date(), DEFAULT_SECONDS_TO_RESEND_CONFIRMATION));
