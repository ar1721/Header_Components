import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import Header from './components/header';

function App(props) {

  const { isLoading, error } = useAuth0();


  return (
    <main className>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <Header />
          

        </>
      )}
    </main>
  );
}

export default App;