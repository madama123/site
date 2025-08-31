import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { useAuth } from 'hooks/useAuth';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

interface ApiConfig {
  headers?: Record<string, string>;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
}

async function fetchApi<T>(endpoint: string, config: ApiConfig = {}): Promise<T> {
  const { token } = useAuth.getState();
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...config.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    method: config.method || 'GET',
    headers,
    ...(config.body ? { body: JSON.stringify(config.body) } : {}),
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
}

export function useApiQuery<T>(
  endpoint: string,
  options?: Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'>
) {
  return useQuery<T>({
    queryKey: [endpoint],
    queryFn: () => fetchApi<T>(endpoint),
    ...options,
  });
}

export function useApiMutation<T, V>(
  endpoint: string,
  options?: Omit<UseMutationOptions<T, Error, V>, 'mutationFn'>
) {
  return useMutation<T, Error, V>({
    mutationFn: (variables) => fetchApi<T>(endpoint, { method: 'POST', body: variables }),
    ...options,
  });
} 