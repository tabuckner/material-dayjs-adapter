import { MatDateFormats } from '@angular/material/core';

/**
 * Custom Date-Formats and Adapter (using https://github.com/iamkun/dayjs)
 */
export const MAT_DAYJS_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'MM/DD/YYYY',
  },
  display: {
    dateInput: 'MM/DD/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  }
};
