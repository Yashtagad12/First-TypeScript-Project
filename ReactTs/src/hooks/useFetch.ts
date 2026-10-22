import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export default function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T> & { url: string }>({
    url,
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    async function loadData() {
      try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data: T = await response.json();
        setState({ url, data, loading: false, error: null });
      } catch (error: unknown) {
        if (controller.signal.aborted) {
          return;
        }

        setState({
          url,
          data: null,
          loading: false,
          error:
            error instanceof Error ? error.message : "An unknown error occurred",
        });
      }
    }

    void loadData();

    return () => controller.abort();
  }, [url]);

  return state.url === url
    ? { data: state.data, loading: state.loading, error: state.error }
    : { data: null, loading: true, error: null };
}