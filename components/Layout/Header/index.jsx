import DynamicPanel from '@/components/Base/Core/DynamicPanel';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import useOnClickOutside from 'utils/hooks/useOnClickOutside';
import {
  HeaderWrapper,
  MenuPanel,
  HeaderBar,
  MenuPanelLink,
  MenuLinkList,
  HiddenPanel,
  Courtain,
  BarLink,
} from './styled';

const NavLink = (props) => (
  <Link href={props.href || ''} style={{ zIndex: '11' }}>
    <BarLink className="hide-on-830" {...props}>
      {props.children}
    </BarLink>
  </Link>
);

const links = [
  { name: 'Store', href: '' },
  { name: 'Mac', href: '' },
  { name: 'iPod', href: '' },
  { name: 'iPhone', href: '' },
  { name: 'iPhone', href: '' },
  { name: 'Watch', href: '' },
  { name: 'AirPods', href: '' },
  { name: 'TV & Home', href: '' },
  { name: 'Accessories', href: '' },
  { name: 'Support', href: '' },
];

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [domReady, setDomReady] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((val) => !val);
  };

  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  useOnClickOutside(menuRef, (e) => {
    if (!buttonRef.current.contains(e.target)) {
      setOpenMenu(false);
    }
  });

  useEffect(() => {
    if (!document) return;
    document.body.style.overflow = openMenu ? 'hidden' : 'auto';
  }, [openMenu]);

  useEffect(() => {
    setTimeout(() => {
      setDomReady(true);
    }, 500);
  }, []);

  return (
    <HeaderWrapper backgroundColors={'light-1'} backgroundType={'solid'}>
      <DynamicPanel
        data={{
          size: 'xs',
          max_width: '1000',
          width: '100',
          p_t: { 830: 0.65 },
          p_b: { 830: 0.65 },
          p_l: 1.4,
          p_r: 0.8,
        }}
      >
        <HeaderBar
          collapsed={!openMenu}
          data={{
            width: 100,
            direction: 'row',
            align_x: 'center',
            align_y: 'center',
            font_color: 'dark-5',
          }}
        >
          <Link href="/">
            <img src="/img/logo/logo-main.svg" style={{ width: '50px' }} />
          </Link>

          {links.map((link, idx) => (
            <NavLink
              key={`link-${idx}`}
              href={link.href}
              /* onMouseEnter={() => setOpenMenu(true)} */
            >
              {link.name}
            </NavLink>
          ))}

          <div className="menu-btn" onClick={handleOpenMenu} ref={buttonRef}>
            <svg viewBox="0 0 70 95" width="30" height="30">
              <rect y="30" width="70" height="5"></rect>
              <rect y="60" width="70" height="5"></rect>
            </svg>
          </div>
        </HeaderBar>
      </DynamicPanel>

      <HiddenPanel
        ref={menuRef}
        className={
          domReady && !openMenu
            ? 'hidden_panel_collapsed'
            : 'hidden_panel_not-collapsed'
        }
      >
        <MenuPanel
          data={{
            size: { main: 'xxl', 830: 'lg' },
            width: 100,
            min_height: { md: '100vh' },
            background_color: 'light-2',

            p_t: { main: 3, md: 2 },
            p_b: { main: 3, md: 2 },
            p_l: { main: 1.4 },
            font_color: 'dark-1',
            align_x: 'center'
          }}
          className={
            !openMenu
              ? 'menu_panel_collapsed'
              : 'menu_panel_collapsed_not-collapsed'
          }
        >
          <MenuLinkList width='100%' maxWidth='1000px'>
            <MenuPanelLink selected>
              <Link href="/">Home</Link>
            </MenuPanelLink>
            <MenuPanelLink selected>
              <Link href="/trips">Link</Link>
            </MenuPanelLink>
            <MenuPanelLink selected>
              <Link href="/gallery">Link 2</Link>
            </MenuPanelLink>
            <MenuPanelLink selected>
              <Link href="/about-us">About us</Link>
            </MenuPanelLink>
          </MenuLinkList>
        </MenuPanel>
      </HiddenPanel>

      <Courtain
        backgroundColors={'dark-1'}
        backgroundType={'solid'}
        backgroundOpacity={0.7}
        className={!openMenu ? 'courtain_collapsed' : 'courtain_not-collapsed'}
      />
    </HeaderWrapper>
  );
}

export default Header;
