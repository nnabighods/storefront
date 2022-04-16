import Head from "next/head";
import PageTitle from "../components/PageTitle/PageTitle";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Home(props) {
  const products = props.products.slice(0,3);

  return (
    <>
    <Head>
      <meta charset="UTF-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Seeder</title>
    </Head>
    <PageTitle title="Seeder" tagline="For all your seed needs!"/>
    <main>
      {  products.map(product=> <ProductCard  key={product.uid} product={product}/>)}
    </main>
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://storefront-e9f7d-default-rtdb.firebaseio.com/products.json')
  const productData = await res.json();
  const products = Object.values(productData)
  return {
      props:{
          products
      },
      revalidate: 60,
  }
}