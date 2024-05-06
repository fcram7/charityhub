import NotAuthorized from "/not-authorized.svg";

const Hero = () => {
  return ( 
    <section className="hero-section px-[5%] py-24 bg-slate-100">
      <div className="hero-section-content flex gap-28">
        <img src={NotAuthorized} alt="Not Authorized" className="w-[45%] opacity-80"/>

        <div className="hero-section-text py-24 opacity-75">
          <h1 className="font-clashGrotesk font-bold text-9xl mb-4">403</h1>
          <h2 className="font-instrument text-5xl mb-2">You're not authorized.</h2>
          <p className="font-redhatdisplay text-xl">Please login with your registered account.</p>
        </div>
      </div>
    </section>
   );
}
 
export default Hero;