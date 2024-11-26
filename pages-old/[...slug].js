import { gql } from "@apollo/client";
import client from "client";
import { Page } from "components/Page/Page";
import { getPageStaticProps } from "utils/getPageStaticProps";

export default Page;

export const getStaticProps = getPageStaticProps;

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
        properties {
          nodes {
            title
            uri
          }
        }
      }
    `,
  });

  return {
    paths: [...data.pages.nodes, ...data.properties.nodes]
      .filter((page) => page.uri !== "/")
      .map((page) => ({
        params: {
          slug: page.uri.substring(1, page.uri.length - 1).split("/"),
        },
      })),
    fallback: "blocking",
  };
};
