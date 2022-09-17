export const token = () => {
  let authToken = localStorage.getItem("userInfo");

  return authToken;
};
