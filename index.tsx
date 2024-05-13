import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <h1></h1>
      <div>
      <br/>
      <Link href="/about">About </Link>
      <br />
      <Link href="/contatc"> Contact</Link>
      <br />
      <Link href="/product">Product </Link>
     
      </div>
    </div>
  );
}
