import Link from "next/link";
import Router from "next/router";
import Layout from "../components/Layout.js";

/* we'll pass in data for a postroll */
const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout>
    <div>Yo, it's Next</div>
    <p>
      What it's
      <Link href="/about">
        <button style={{ fontSize: 20 }}> all about</button>
      </Link>
      <Postlink title=" some silly thing"> text here</Postlink>
    </p>
    Click <a onClick={() => Router.push("/about")}>here</a> to read more
  </Layout>
);
