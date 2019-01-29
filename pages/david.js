import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";

const David = ({ stars, name }) => (
  <>
    <Layout>
      Hi {name}. Stars:{stars}
    </Layout>
  </>
);

/* So we can add any kind of data we want and send in in via props.... */
David.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return {
    stars: json.stargazers_count,
    name: "David"
  }; // set props here
};

export default David;
