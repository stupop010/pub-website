import Head from "next/head";
import NavBar from "./NavBar";

const Layout = props => (
  <div>
    <Head>
      <title>Pub Website</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/solar/bootstrap.min.css"
      />
    </Head>
    <NavBar />
    {props.children}
  </div>
);
export default Layout;
