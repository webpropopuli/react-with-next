import Link from "next/link";

const linkStyle = { marginRight: 15 };

/*Create /HOME and /ABOUT links. We don't need to put this in /pages because we don't need a direct URL to our Header component.
 */
const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
