import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useGithubUser(username) {
  const { data, error } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  return {
    user: data,
    error,
    loading: !data && !error && !!username,
  };
}