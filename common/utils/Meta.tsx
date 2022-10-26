import Head from "next/head";
import React from "react";

interface MetaType {
  title: string;
  description: string;
}

export const Meta = ({ title, description }: MetaType) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="{description}" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
