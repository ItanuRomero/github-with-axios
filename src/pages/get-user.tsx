import { getUser } from "@/lib/github";
import { useState } from "react"

export default function Get() {
  const [username, setUsername] = useState(String);
  const [response, setResponse] = useState(<></>)

  async function searchByUsername() {
    getUser(username)
    .then((user) => {
      setResponse(
        <div>
          <h1>{user.login}</h1>
          <img src={user.avatar_url} alt="User avatar" />
          <p>{user.bio}</p>
        </div>
      );
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <>
      <input type="text" placeholder='Username' onChange={e => {
        setUsername(e.target.value)
      }}/>
      <button onClick={searchByUsername}>Buscar</button>
      <main>
        {response}
      </main>
    </>
  )
}
