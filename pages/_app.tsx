import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from "next/Link";
import { useRouter } from 'next/router';



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  function isPathNameMatch (pathName: string) {
    if(router.pathname === pathName) return true;
    else if (router.pathname !== '/' && router.pathname.includes(pathName)) {
      return true;
    }
    else return false;
  }
  
  return (
    <>
    <nav>
      <Link href='/' >
        <a >home</a>
      </Link> |   
      <Link href='/test'>
        <a> test</a>
      </Link> | 
      <Link href='/todo'>
        <a> todo</a>
      </Link> | 
      <Link href='/movies'>
        <a > movies</a>
      </Link> | 
      <Link href='/counter'>
        <a> Counter</a>
      </Link>
    </nav>
    <Component {...pageProps} />
    </>
    
  )
}

export default MyApp
