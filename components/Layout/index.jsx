import Header from './Header';
import Footer from './Footer';
import { LayoutWrapper } from './styled';

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
