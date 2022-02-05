import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from "next/Link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <nav>
      <Link href='/' >
        <a className='class'>home</a>
      </Link> |   
      <Link href='/test'>
        <a>test</a>
      </Link> | 
      <Link href='/todo'>
        <a>todo</a>
      </Link>
      <Link href='/movies'>
        <a>movies</a>
      </Link>
      <Link href='/counter'>
        <a>Counter</a>
      </Link>
    </nav>
    <Component {...pageProps} />
    </>
    
  )
}

export default MyApp
