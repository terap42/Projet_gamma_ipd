import Link from "next/link";
function AboutPage(){
    return (
     <div>
        <h1> About us</h1>
        <p> we are a company that specialize in creatin</p>

        <br />
      <Link href="/contatc"> Contact</Link>
      <br />
      <Link href="/product">Product </Link>
     </div>
    );
}
export default AboutPage;