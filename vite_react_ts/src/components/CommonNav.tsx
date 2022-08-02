import { NavLink } from 'react-router-dom';

const CommonNav = () => {
  const pages = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Sample',
      path: '/sample',
    },
  ];
  const activeStyle: any = {
    textDecoration: 'underline',
  };

  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <li key={page.path}>
            <NavLink
              to={page.path}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {page.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CommonNav;
