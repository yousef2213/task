import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar.js';
import CartContainer from '../components/ProductsContainer';
import cartItems from "../Products";

export default function Home({Products}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <CartContainer cart={cartItems} />
    </div>
  )
}

// Home.getInitialProps = async function () {
//   const APP_ID = "9d1d6b62";
//   const APP_KEY = "4e2a84f635da5af4c1b04778afdf8c40"
  
//   const res = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
//   const data = await res.json();
//   console.log(data.hits);
//   return {
//     Products: data.hits
//   };
// };
