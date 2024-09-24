export const getNativeWebDevice = (userAgent) => {
  const userAgentLower = userAgent.toLowerCase();

  if (/iphone|ipod|ipad/.test(userAgentLower)) {
    return "iOS";
  } else if (/android/.test(userAgentLower)) {
    return "Android";
  } else {
    return "Desktop";
  }
};
