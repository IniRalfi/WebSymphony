import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState(location.pathname + location.hash);

  const handleAboutClick = (e) => {
    e.preventDefault();
    setActiveLink('/#about');

    if (location.pathname === '/') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

    } else {
      navigate('/', { state: { scrollTo: 'about' } })
    }
  };

  const handleHomeClick = () => {
    setActiveLink('/');
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  useEffect(() => {
    setActiveLink(location.pathname + location.hash);
  }, [location]);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' })
          setActiveLink('/#about');
        }, 100)
      }
    }
  }, [location.state])

  return { activeLink, handleAboutClick, handleHomeClick, handleLinkClick };
};

