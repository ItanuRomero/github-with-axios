import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href='/get-user'>GET User</Link>
      <br /> <br />
      <Link href='/get-issues'>GET Issues</Link>
      <br /> <br />
      <Link href='/post-issue'>Post issue</Link>
    </>
  )
}