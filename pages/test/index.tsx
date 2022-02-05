import styles from './style.module.css';
import Head from 'next/head';
import Image from 'next/image';

const Test = () => {
  return(
    <>
    <Head>
      <title>Test Page</title>
    </Head>
    <h1 className={styles.head}>Test</h1>
    <Image src={require('./images/zombie.png')} alt='zombie'/>
    </>
  )
}

export default Test;