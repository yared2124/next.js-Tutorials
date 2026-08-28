import Link from "next/link"
export default function product(){
    const productId = 100;
    return (
      <>
        <Link href={"/"}> Home </Link>
        <h1>product list </h1>
        <h2>
          {" "}
          <Link href={`/product/${productId}`}> product {productId}</Link>
        </h2>
        <h2>
          {" "}
          <Link href={"/product/2"}> product 2</Link>
        </h2>
        <h2>
          {" "}
          <Link href={"/product/3"}> product 3</Link>
        </h2>
       
      </>
    ); 
}
