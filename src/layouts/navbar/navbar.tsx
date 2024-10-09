import React from 'react';

import { Menu } from 'iconoir-react';

import './navbar.css';

interface NavbarLinkProps {
  text: string;
  link: string;
  isActive?: boolean;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ text, link, isActive }) => {
  return (
      <a href={link} className={`navbar-link ${isActive ? "link_active" : ""}`}>
          {text}
      </a>
  );
};

const MobileNavbarLink: React.FC<NavbarLinkProps> = ({ text, link, isActive }) => {
  return (
      <a href={link} className={`mobileNavbar-link ${isActive ? "link_active" : ""}`}>
          {text}
      </a>
  );
};

export const Navbar = ({ activeLink }: { activeLink: number }) => {
  const links = [
    { text: 'Accueil', link: '/' },
    { text: 'Projets', link: '/projets' },
    { text: 'Matériels', link: '/materiels' },
    { text: 'Photos', link: '/photos' },
    { text: 'Partenaires', link: '/partenaires' },
    { text: 'Nous contacter', link: '/contact' },
  ]
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      <nav className={'navbar'}>
        <a href={'/'} className={'navbar-logo'}>
          <img
            className={'navbar-logo-img img_large'}
            src={'https://r2.modelec.club/logo-full.png'} // TODO: Change to SVG logo / import it from assets
            alt={'Modelec Logo'}
          />
          <img
            className={'navbar-logo-img img_small'}
            src={'https://r2.modelec.club/logo.png'} // TODO: Change to SVG logo / import it from assets
            alt={'Modelec Logo'}
          />
        </a>
        <div className={'navbar-links'}>
          {
            links.map((link, index) => (
              <NavbarLink key={index} text={link.text} link={link.link} isActive={activeLink == index} />
            ))
          }
        </div>
        <button className={'navbar-open'} onClick={() => setIsMobileMenuOpen(old => !old)}>
          <Menu />
        </button>
        { isMobileMenuOpen &&
          <nav className={'mobileNavbar'}>
            <h1 className={'mobileNavbar-title'}>Se déplacer sur le site</h1>
            <div className={'mobileNavbar-links'}>
              {
                links.map((link, index) => (
                  <MobileNavbarLink key={index} text={link.text} link={link.link} isActive={activeLink == index} />
                ))
              }
            </div>
          </nav>
        }
      </nav>
    </>
  );
};
