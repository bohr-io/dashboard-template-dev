import styled from '@emotion/styled';
import Link from '../Link';
import { FC } from 'react';

const SidebarWrapper = styled.aside`
  padding: 5px 20px;
  background-color: rgb(130, 10, 209);
  color: rgb(255, 255, 255);
  width: 200px;
  height: 100vh;
`

const LogoWrapper = styled.div`
  text-align: center;
`

const PanelNav = styled.nav`
`

const NavLinkList = styled.ul`
  list-style: none;
  margin: unset;
  padding: unset;

  li {
    margin-top: 5px;
  }

  & & {
    padding-left: 2em;
  }

  & + & {
    margin-top: 1em;
  }
`

const Header: FC = () => {
  return (
    <SidebarWrapper>
      <LogoWrapper>
        <p>Dashboard</p>
      </LogoWrapper>
      <PanelNav>
        <NavLinkList>
          <li>
            Cadastros
            <NavLinkList>
              <li>
                <Link
                  color="white"
                  href="/admin/palavras"
                  underline="hover"
                >
                  Lista
                </Link>
              </li>
              <li>
                <Link
                  color="white"
                  href="/admin/palavras"
                  underline="hover"
                >
                  Registro
                </Link>
              </li>
            </NavLinkList>
          </li>
        </NavLinkList>
        <NavLinkList>
          <li>
            <Link
              color="white"
              href="/admin/palavras"
              underline="hover"
            >
              Palavras
            </Link>
          </li>
        </NavLinkList>
      </PanelNav>
    </SidebarWrapper>
  );
}

export default Header;
