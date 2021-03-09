/** This Function takes given date returns time ago of that date */
import moment from 'moment';
import 'moment/min/locales';

export function time_ago(time, lang) {
  const convertedTime = moment(time).locale(lang).fromNow();

  return convertedTime;
}

export function convertQuizTimer(timeInSeconds) {
  return moment.utc(timeInSeconds * 1000).format('HH:mm:ss');
}

export const updateRelativeTimeLocale = () => {
  moment.locale('en', {
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'seconds',
      ss: '%s s',
      m: 'a minute',
      mm: '%d m',
      h: 'an hour',
      hh: '%d h',
      d: 'a day',
      dd: '%d d',
      M: 'a month',
      MM: '%d M',
      y: 'a year',
      yy: '%d Y',
    },
  });
};

export const toUnixFormat = (date) => {
  return moment(date).unix();
};

export const fromUnixtoStandard = (date) => {
  const std = moment.unix(date).valueOf();
  return moment(std).format('DD/MM/YYYY');
};

export const reverseHijriDate = (date) => {
  var dateAr = date.split('/');
  var newDate = dateAr[2] + '/' + dateAr[1] + '/' + dateAr[0];
  return newDate;
};

export const fromTimeStamp = (date, format, lang) => {
  moment.locale(lang);
  return moment.unix(date).format(format);
};

// export const deadlineChecker = ({deadline}) => {
//   const momDeadline = moment('2015-07-02');
//   dd = momDeadline.day();
//   dm = momDeadline.month();
//   dy = momDeadline.month();
// };
