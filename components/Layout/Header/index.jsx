import DynamicPanel from '@/components/Base/Core/DynamicPanel';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { HeaderWrapper, MenuPanel, HeaderBar, MenuPanelLink } from './styled';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [domReady, setDomReady] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu((val) => !val);
  };

  useEffect(() => {
    if (!document) return;
    document.body.style.overflow = openMenu ? 'hidden' : 'auto';
  }, [openMenu]);

  return (
    <HeaderWrapper
      collapsed={!openMenu}
      backgroundColors={'light-1'}
      backgroundType={'solid'}
    >
      <DynamicPanel
        data={{
          size: 'xs',
          max_width: '1000',
          width: '100',
          p_t: 0.7,
          p_b: 0.7,
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
          }}
        >
          <div className="brand-container">CELTUC</div>
          <div className="menu-btn" onClick={handleOpenMenu}>
            <svg viewBox="0 0 70 95" width="30" height="30">
              <rect y="30" width="70" height="7"></rect>
              <rect y="60" width="70" height="7"></rect>
            </svg>
          </div>
        </HeaderBar>
      </DynamicPanel>

      <MenuPanel
        collapsed={!openMenu}
        data={{
          size: 'xxl',
          width: 100,
          background_color: 'light-1',
          p_l: { main: 5, md: 1.2 },
          p_t: { main: 3, md: 2 },
          font_color: 'dark-1',
        }}
        className={!openMenu ? 'collapsed' : 'not-collapsed'}
        style={{ display: !domReady ? 'none': 'flex' }}
      >
        <ul className="link-list">
          <MenuPanelLink selected>
            <Link href="/">Home</Link>
          </MenuPanelLink>
          <MenuPanelLink>
            <Link href="/trips">Link</Link>
          </MenuPanelLink>
          <MenuPanelLink>
            <Link href="/gallery">Link 2</Link>
          </MenuPanelLink>
          <MenuPanelLink>
            <Link href="/about-us">About us</Link>
          </MenuPanelLink>
        </ul>
      </MenuPanel>
    </HeaderWrapper>
  );
}

export default Header;
