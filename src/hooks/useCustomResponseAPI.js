import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../utils/constants';
import { useLatestAPI } from './useLatestAPI';

function buildQueryParams(documentType, documentTags) {
  let params = `q=${encodeURIComponent(`[[at(document.type, "${documentType}")]]`)}`;

  if (documentTags) {
    params += `&q=${encodeURIComponent(`[[at(document.tags, ["${documentTags}"])]]`)}`;
  }

  return params;
}

export function useCustomResponseAPI({ documentType, documentTags, pageSize }) {
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

        const queryParams = buildQueryParams(documentType, documentTags);

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&${queryParams}&lang=en-us&pageSize=${pageSize}`,
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