import { formatDistanceToNow, parseISO } from 'date-fns';

export function timeAgo(publishedAt) {
  const date = parseISO(publishedAt);
  return formatDistanceToNow(date, { addSuffix: true });
}
