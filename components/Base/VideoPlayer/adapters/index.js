export const getYoutubeId = (url) => {
  var ID = '';
  url = url
    .replace(/(>|<)/gi, '')
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  } else {
    ID = url;
  }
  return ID;
};

export const getDuration = (videoData) => {
  if (!videoData) return '';

  const time_s = videoData.getDuration();
  const minute = Math.floor(time_s / 60);
  const rest_seconds = time_s % 60;

  return (
    minute.toString().padStart(2, '0') +
    ':' +
    rest_seconds.toString().padStart(2, '0')
  );
};
