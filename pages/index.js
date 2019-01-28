import Layout from "../components/Layout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

/* we'll pass in data for a postroll using route masking (<Link as=...)*/
const PostLink = props => (
  <li>
    <Link as={`p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = props => (
  <Layout>
    <h3>Yo, it's Next</h3>
    <p>coming soon... </p>
    <Link href="/about">
      <button style={{ fontSize: 20 }}>Log in here</button>
    </Link>
    <ul>
      {/* Accept a list of TVshows from some API and show it. */}
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    Click <a onClick={() => Router.push("/about")}>here</a> to read more
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  };
};

export default Index;
