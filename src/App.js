import React, { useEffect } from 'react';
import './App.css';
import LeftImage from './components/LeftImage'
import MainContainer from './components/main/MainContainer.js'
import { API } from 'aws-amplify';
import { createUser } from './graphql/mutations'
import { getUser } from './graphql/queries'
function App() {
  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    const userDB = await API.graphql({ query: getUser })
    // await API.graphql({query: createUser, varaibles: {input: }})
  }
  return (
    <div className="App">
      <LeftImage />
      <MainContainer />
    </div>
  );
}

export default App;
