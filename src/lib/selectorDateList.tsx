import { format } from 'date-fns';

export const monthNames = Array.from({ length: 12 }, (_, i) => format(new Date(2000, i), 'MMMM'));
