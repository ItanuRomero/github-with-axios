import { getIssues } from "@/lib/github";
import { useState } from "react";

export default function Get() {
  const [issues, setIssues] = useState([])

  getIssues()
    .then((issues) => {
      setIssues(issues)
    })
    .catch(error => {
      console.error(error)
    })
  
  return (
    <>
      <h1>Issues:</h1>
      <ul>
        {issues.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}
