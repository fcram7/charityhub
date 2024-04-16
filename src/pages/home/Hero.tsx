import Hero1 from "/hero-1.svg";
import Hero2 from "/hero-2.svg";

const Hero = () => {
  return ( 
    <section className="hero-section relative px-[5%] lg:px-[2%] py-48 bg-yellow-300 bg-gradient-to-b from-95% from-yellow-300 to-slate-100">
      <img className="size-28 sm:size-40 lg:size-64 absolute top-5 lg:left-24 rotate-12" src={Hero1} alt="" />
      <img className="size-32 sm:size-48 lg:size-72 absolute top-36 lg:top-32 right-8 sm:right-24 lg:right-48" src={Hero2} alt="" />
      <div className="section-content relative flex justify-center">
        <div className="hero-texts flex flex-col gap-6">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-redhatdisplay font-extrabold">Share,</h1>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-redhatdisplay font-extrabold">Care,</h1>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-redhatdisplay font-extrabold">For The Better.</h1>
        </div>
      </div>
    </section>
   );
}
 
export default Hero;