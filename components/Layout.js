import Header from "./Header";
import Footer from "./Footer";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

/* Now, defining a page with <Layout> will bring in a >header> and a <Footer> with all the contents of the >Layout> component between those.
*/
const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
