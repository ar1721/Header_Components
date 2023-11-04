import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div className="bg-blue-500 p-4 text-white flex items-center justify-between">
      <div>
        <img src="google-quiz.svg" alt="Login" className="h-6 w-6 mr-2" />
      </div>
      <h1 className="text-xl font-bold">Trivia Odyssey</h1>
      <button onClick={loginWithRedirect} className="bg-white text-blue-500 py-2 px-4 rounded">Sign In</button>
    </div>
        )
    )
}

export default LoginButton
