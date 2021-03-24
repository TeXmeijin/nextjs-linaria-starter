import Head from 'next/head'
import { css } from 'linaria';

const headingStyle = css`
  font-weight: bold;
  font-size: 1.4rem;
  color: red;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nextjs Linaria boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={headingStyle}>
          Nextjs Linaria boilerplate
        </h1>
      </main>
    </div>
  )
}
