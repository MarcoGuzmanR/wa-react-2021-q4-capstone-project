import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../utils/constants';
import { useLatestAPI } from './useLatestAPI';

function buildQueryParams(documentType, documentTags) {
  const tagsParams = documentTags ? `&q=${encodeURIComponent(`[[at(document.tags, ["${documentTags}"])]]`)}` : '';
  const typeParams = documentType ? `&q=${encodeURIComponent(`[[at(document.type, "${documentType}")]]`)}` : '';

  return typeParams + tagsParams;
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

    const queryParams = buildQueryParams(documentType, documentTags);

    async function getResponse() {
      try {
        setResponse({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}${queryParams}&lang=en-us&pageSize=${pageSize}`,
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