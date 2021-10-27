import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../utils/constants';
import { useLatestAPI } from './useLatestAPI';

export function useCustomReponseAPI({ documentType, pageSize }) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [response, setResponse] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getResponse() {
      try {
        setResponse({ data: {}, isLoading: true });
        const encodeDocumentType = encodeURIComponent(`[[at(document.type, "${documentType}")]]`);

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeDocumentType}&lang=en-us&${pageSize}=5`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setResponse({ data, isLoading: false });
      } catch (err) {
        setResponse({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getResponse();

    return () => {
      controller.abort();
    };
  }, [apiRef, documentType, isApiMetadataLoading, pageSize]);

  return response;
}