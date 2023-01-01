/* eslint-disable @next/next/no-img-element */
import Button from '@/components/Base/Button';
import Img from '@/components/Base/Img';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { HeaderWrapper, MenuPanel, HeaderBar, MenuPanelLink } from './styled';

function Header(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isPageTop, setIsPageTop] = useState(true);

  const handleOpenMenu = () => {
    setOpenMenu((val) => !val);
  };

  useEffect(() => {
    if (!document || !window) return;

    const handlePageTop = () => {
      setIsPageTop(window.scrollY <= 700);
    };

    window.addEventListener('scroll', handlePageTop);

    return () => {
      window.removeEventListener('scroll', handlePageTop);
    };
  }, []);

  useEffect(() => {
    if (!document) return;
    document.body.style.overflow = openMenu ? 'hidden' : 'auto';
  }, [openMenu]);

  return (
    <HeaderWrapper collapsed={!openMenu}>
      <HeaderBar collapsed={!openMenu} isPageTop={isPageTop} id="header-bar">
        <div className="menu-btn" onClick={handleOpenMenu}>
          <svg viewBox="0 0 70 95" width="30" height="30">
            <rect y="30" width="70" height="5"></rect>
            <rect y="60" width="70" height="5"></rect>
          </svg>
        </div>
        <div className="brand-container">
          <p className="brand-name">NATURAL ANGLERS</p>
          <img className="brand-logo" src="/img/logo/logo-negative.svg" />
        </div>
        <Link href="/">
          <Button className="get-in-touch">Get in touch</Button>
        </Link>
      </HeaderBar>

      <MenuPanel collapsed={!openMenu}>
        <ul className="link-list">
          <MenuPanelLink selected>
            <Link href="/">Home</Link>
          </MenuPanelLink>
          <MenuPanelLink>
            <Link href="/trips">Trips</Link>
          </MenuPanelLink>
          <MenuPanelLink>
            <Link href="/gallery">Gallery</Link>
          </MenuPanelLink>
          <MenuPanelLink>
            <Link href="/about-us">About us</Link>
          </MenuPanelLink>
        </ul>

        <ul className="link-list-minor">
          <li>
            <a
              href="https://www.whatsapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              Whatsapp
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </li>
        </ul>

        <div className="bg-img gradient-left">
          <Img src={'/img/img (5).webp'} objectFit="cover" />
        </div>
      </MenuPanel>
    </HeaderWrapper>
  );
}

export default Header;
