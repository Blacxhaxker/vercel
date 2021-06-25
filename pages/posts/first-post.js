import Link from "next/link";
import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";

function firstpost() {
  return (
    <Layout>
      <Head>
        <title>Aomsin app</title>
      </Head>

      <h1>Hello this is first post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

export default firstpost;
