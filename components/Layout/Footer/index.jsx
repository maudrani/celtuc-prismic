import { FooterWrapper } from "./styled";

function Footer() {
  return (
    <FooterWrapper>
      <div className="content">
        <div className="rights">
          <img src="/img/logo/logo-negative.svg" className="logo" />
          <p>All rights reserved to Natural Anglers 2022.</p>
        </div>
        <ul className="social-list">
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
