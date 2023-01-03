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
