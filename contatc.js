import Link from "next/link";
function ContactPage(){
    return (
     <div>
        <h1> Contact us</h1>
        <p> we are a company that specialize in creatin</p>

      
      <br/>
      <Link href="/about">About </Link>
      
      <br />
      <Link href="/product">Product </Link>
     </div>
    );
}
export default ContactPage;