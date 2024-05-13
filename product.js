import Link from "next/link";
function ProductPage(){
    return (
     <div>
        <h1> Poduct</h1>
        <p> we are a company that specialize in creating product</p>

        <Link href="/about">About </Link>
      <br />
      <Link href="/contatc"> Contact</Link>
     
     </div>
    );
}
export default ProductPage;