export const truncateString = (string, maxLength = 50) => {
  if (!string) return null;
  if (string.length <= maxLength) return string;
  return `${string.substring(0, maxLength)}...`;
};

export const capitalize = (text) => {
  return text && text.toUpperCase();
};

export const titleize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
export const convertStrToArr = (text) => {
  if (!Array.isArray(text)) {
    return text.split(',');
  } else {
    return text;
  }
};

export const getYouTubeID = (url) => {
  url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
};
export const ValidURL = (url) => {
  let regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  if (!regex.test(url)) {
    return false;
  } else {
    return true;
  }
};
export const arrToString = (arr) => {
  return arr
    .map((item) => {
      return item.name ? item.name : item;
    })
    .join(',');
};
export const removeSpaces = (str) => {
  return str ? str.trim().toLowerCase() : null;
};
export const removeHtmlTags = (str) => {
  const regex = /(<([^>]+)>)/gi;
  const regexForRemoveAnd = /&amp;/g;
  const result = str && str.replace(regex, '').replace(regexForRemoveAnd, '&');
  return result;
};
export const getDropDownData = ({value, data}) => {
  if (/\d/.test(value)) {
    const newValue = data.filter((item) => item.value == value);
    return newValue && newValue.length > 0 ? newValue[0].label : null;
  } else {
    const labelValue = data.filter((item) => item.label == value);
    return labelValue && labelValue.length > 0 ? labelValue[0].value : null;
  }
};

export function isURL(str) {
  return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(str);
}
