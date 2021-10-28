import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../utils/constants';
import { useLatestAPI } from './useLatestAPI';

function buildQueryParams(searchTerm, productId, documentType, documentTags, pageSize) {
  if (productId) {
    // return `&q=${encodeURIComponent(`[[:d=at(document.id,"${productId}")]]`)}`;
    return `&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22${productId}%22%29+%5D%5D`;
  }

  const searchParams = searchTerm   ? `&q=${encodeURIComponent(`[[fulltext(document, "${searchTerm}")]]`)}` : '';
  const tagsParams   = documentTags ? `&q=${encodeURIComponent(`[[at(document.tags, ["${documentTags}"])]]`)}` : '';
  const typeParams   = documentType ? `&q=${encodeURIComponent(`[[at(document.type, "${documentType}")]]`)}` : '';

  return `${typeParams}${searchParams}${tagsParams}&lang=en-us&pageSize=${pageSize}`;
}

export function useCustomResponseAPI({ searchTerm, productId, documentType, documentTags, pageSize }) {
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

    const queryParams = buildQueryParams(searchTerm, productId, documentType, documentTags, pageSize);

    async function getResponse() {
      try {
        setResponse({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}${queryParams}`,
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
  }, [apiRef, documentType, isApiMetadataLoading, pageSize, productId, searchTerm]);

  return response;
}