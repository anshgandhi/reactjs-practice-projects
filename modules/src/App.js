import React, { useState } from 'react';
import FictionalUserInput from './components/FictionalUsers/FictionalUserInput/FictionalUserInput';
import FictionalUserList from './components/FictionalUsers/FictionalUserList/FictionalUserList';

function App() {
  const dummyData = [
    {key: Math.random().toString(), name: "A", age: 21},
    {key: Math.random().toString(), name: "B", age: 31},
  ]
  let [data, setData] = useState(dummyData)

  const addUser = enteredData => {
    setData(prevState => {
      return [...data, enteredData]
    })
  }

  const deleteUser = userId => {
    let data_updated = []
    for (let user of data) {
      if (user.key !== ''+userId) {
        data_updated = data_updated.concat(user)
      }
    }
    setData(prevState => {
      return data_updated
    })
  }

  return (
    <div>
      <FictionalUserInput addUserHandler={addUser}></FictionalUserInput>
      <FictionalUserList userList={data} deleteUserHandler={deleteUser}></FictionalUserList>
    </div>
  );
}

export default App;
