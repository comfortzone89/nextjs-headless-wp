export const getSeo = async (uri) => {
  const params = {
    query: `
      query SeoQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            seo {
              title
              metaDesc
            }
          }
          ... on Property {
            seo {
              title
              metaDesc
            }
          }
        }
      }
    `,
    variables: {
      uri,
    },
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
    cache: "no-store",
  });

  const { data } = await response.json();

  // 404
  if (!data.nodeByUri) {
    return null;
  }

  return data.nodeByUri.seo;
};
