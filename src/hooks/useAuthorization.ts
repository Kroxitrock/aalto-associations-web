export default function useAuthorization() {
  const setAuthorizationToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  const getToken = () =>
    localStorage.getItem("token") ??
    document.cookie
      .split("; ")
      .filter((row) => row.startsWith("access_token="))
      .map((c) => c.split("=")[1])[0];

  const isAuthorized = () => (getToken() ? true : false);

  const logOut = () => {
    if (isAuthorized()) {
      localStorage.removeItem("token");
      document.cookie = "access_token=; Max-Age=0; path=/; ";
    }
  };

  return { isAuthorized, getToken, logOut, setAuthorizationToken };
}
