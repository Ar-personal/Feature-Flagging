import React, { ComponentType, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useFlags, useLDClient, withLDProvider } from 'launchdarkly-react-client-sdk';
import HelloWorld from './helloWorld';

function App() {
  const flags = useFlags();
  const ldClient = useLDClient();

  useEffect(() => {
    ldClient?.identify({key: '632d8593dceb5d11abf32610'});
  })

  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withLDProvider({
  clientSideID: '632d8593dceb5d11abf32610',
  user: {
    "key": "example_user",
    "name": "Example user",
    "email": "User@example.com"
}
})(App);

