/* Usa la API nativa de JS pero no es muy precisa, es muy aleatoria la diferencia es 
de 30 segundos a 20 minutos, pero puede ser por un mal uso a la hora de llamar la función */
const DATE_UNITS = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
];
const getDateDiffs = (dateString) => {
  const time = new Date(dateString);
  const ml = time.getTime();

  const now = Date.now();
  const elapsed = (ml - now) / 1000;

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === 'second') {
      const value = Math.round(elapsed / secondsInUnit);
      return { value, unit };
    }
  }
};

export function createTimeAgo(timestamp, style = 'short') {
  const { unit, value } = getDateDiffs(timestamp);
  const rtf = new Intl.RelativeTimeFormat('es', { style });
  return rtf.format(value, unit);
}

// import dayjs from 'dayjs';
// import relativeTime from 'dayjs/plugin/relativeTime';
// import 'dayjs/locale/es-mx';
// dayjs.extend(relativeTime);
// dayjs.locale('es-mx');

// export function createTimeAgo(createAt) {
//   return dayjs(createAt).fromNow();
// }
