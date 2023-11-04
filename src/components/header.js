import { useAuth0 } from '@auth0/auth0-react';
import HeaderLogin from './headerLogin';
import HeaderLogout from './headerLogout';

const Header = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <div>
      {isAuthenticated ? <HeaderLogout /> : <HeaderLogin />}
    </div>
    )
}

export default Header
