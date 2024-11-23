export default function useAuthorization() {
  const getToken = () =>
    document.cookie
      .split("; ")
      .filter((row) => row.startsWith("access_token="))
      .map((c) => c.split("=")[1])[0];

  const isAuthorized = () => (getToken() ? true : false);

  const logOut = () => {
    if (isAuthorized()) {
      document.cookie = "access_token=; Max-Age=0; path=/; ";
    }
  };

  return { isAuthorized, getToken, logOut };
}
