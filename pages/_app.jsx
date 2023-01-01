
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";
import Layout from "@/components/Layout";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/global";
import theme from "@/styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, ...props }) => (
          <Link href={href}>
            <a {...props} />
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PrismicPreview>
      </PrismicProvider>
    </ThemeProvider>
  );
}
