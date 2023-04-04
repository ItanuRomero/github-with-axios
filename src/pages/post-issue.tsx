import { postIssue } from "@/lib/github";
import { useState } from "react"

export default function Post() {
  const [title, setTitle] = useState(String);
  const [body, setBody] = useState(String)

  function getValuesAndPostIssue() {
    postIssue({title, body})
  }

  return (
    <>
      <input type="text" placeholder='Title' onChange={e => {
        setTitle(e.target.value)
      }}/>
      <input type="text" placeholder='Body' onChange={e => {
        setBody(e.target.value)
      }}/>
      <button onClick={getValuesAndPostIssue}>Postar Issue</button>
    </>
  )
}
