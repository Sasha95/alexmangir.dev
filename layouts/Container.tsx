import { PageTransition } from "@/components/page-transition/PageTransition";
import siteMetadata from "@/data/siteMetadata";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import favicon from "public/favicon.ico";

type Props = {
  children: ReactNode;
};

export function Container({ children }: Props) {
  const router = useRouter();
  const meta = {
    title: siteMetadata.title,
    description: siteMetadata.description,
    imageUrl: "public/assets/default-social-image.png",
    twitterHandle: siteMetadata.twitterHandle,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <link rel="shortcut icon" href={favicon.src} />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`${siteMetadata.siteUrl}${router.asPath}`}
        />
        <meta name="application-name" content="&nbsp;" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta property="og:site_name" content="Alexandr Mangir" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitterHandle} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.imageUrl} />
      </Head>
      <main
        className={`mx-auto xl:px-32 lg:px-16 md:px-11 px-7 max-w-screen-xl relative`}
      >
        <PageTransition>{children}</PageTransition>
      </main>
    </div>
  );
}
