export default function useAuthorization() {
  const getToken = () =>
    document.cookie
      .split("; ")
      .filter((row) => row.startsWith("access_token="))
      .map((c) => c.split("=")[1])[0];

  const isAuthorized = () => (getToken() ? true : false);

  return [isAuthorized, getToken];
}
