import Header from "./Header";
import Footer from "./Footer";

//import Style from  './Layout.css'
const Style = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={Style}>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
