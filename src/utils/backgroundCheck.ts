const backgroundCheck = (time: string) => {
  const currentD = new Date(time);
  const currentHour = currentD.getHours();

  // Night hour
  if (currentHour >= 0 && currentHour < 5) {
    return '45deg, #0c1443, #283586';
  }

  // Morning hour
  if (currentHour >= 5 && currentHour < 11) {
    return '45deg, #fbc02d, #ffd95b';
  }

  // Day hour
  if (currentHour >= 11 && currentHour < 18) {
    return '45deg, #2193b0, #6dd5ed';
  }

  // Evening hour
  if (currentHour >= 18) {
    return '45deg, #ff6b6b, #ffa07a';
  }

  return '';
};

export default backgroundCheck;
