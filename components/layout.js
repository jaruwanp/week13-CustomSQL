import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
       <Head>
        <title>Basic Next.js App - Jaruwan Pattanasing</title>
      </Head>
      <header>
      <Link href="/">
        <a title='Home'>
        <div className="container-fluid page_heder"> Custom SQL in Headless CMS-Powered App</div>
        </a>
        </Link>
        <img src="images/header.gif" alt="" className="img-fluid"/>
        {!home && (
          <Link href="/">
          <a title='Go back home' className="btn secondary mt-3">← Back to home</a>
        </Link>
        )
      }
      
      </header>
     
      <main>{children}</main>
      {!home && (
          <Link href="/">
          <a title='Go back home' className="btn secondary mt-3">← Back to home</a>
        </Link>
        )
      }
      <footer>
        <div className="webFooter text-center">
    <p className="text-center mt-1">Week 13: Assignment 13: Custom SQL in Headless CMS-Powered App</p>
    by Jaruwan Pattanasing</div>
      </footer>
    </div>
  );
}