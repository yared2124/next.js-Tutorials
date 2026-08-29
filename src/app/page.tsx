import Link from "next/link";

export default function Home (){
    return (
      <>
        <h1> welcome to Home</h1>
        <Link href={"/blog"}>blog</Link>
        <Link href={"/product"}>product</Link>
        <Link href={"/articles/breaking-news-123?lang=en"}>
          Read in english
        </Link>
        <Link href={"/articles/breaking-news-123?lang=fr"}>
          Read in french
        </Link>
      </>
    );  }