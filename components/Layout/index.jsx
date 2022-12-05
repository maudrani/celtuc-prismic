import Header from "./Header";
import { LayoutWrapper } from "./styled";

import Footer from "./Footer";

function Layout(props) {
  return (
    <LayoutWrapper>
      {/* <Header /> */}
      {props.children}
      {/* <Footer /> */}
    </LayoutWrapper>
  );
}

export default Layout;
