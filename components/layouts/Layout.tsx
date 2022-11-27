import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui/Navbar";

// interface Props {
//   title?: string;
// }

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout = ({
  children,
  title,
}: {
  children: any;
  title?: string;
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Santiago Hayase" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
