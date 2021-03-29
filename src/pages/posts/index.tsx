import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>March 29, 2021</time>
            <strong>How to Create an Express.js Middleware</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, provident?</p>
          </a>
          <a href="#">
            <time>March 29, 2021</time>
            <strong>How to Create an Express.js Middleware</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, provident?</p>
          </a>
          <a href="#">
            <time>March 29, 2021</time>
            <strong>How to Create an Express.js Middleware</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, provident?</p>
          </a>
        </div>
      </main>
    </>
  );
}