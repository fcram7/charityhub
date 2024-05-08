const Hero = () => {
  return ( 
    <section className="hero-section px-[5%] lg:px-[2%] py-52 bg-yellow-300 bg-gradient-to-b from-95% from-yellow-300 to-slate-100">
      <div className="section-content flex flex-col items-center gap-12">
        <h1 className="font-clashGrotesk font-bold text-6xl text-center lg:text-9xl">About <span className="font-mono tracking-tighter font-normal lg:ms-6">charityhub.</span></h1>
        <h3 className="font-redhatdisplay text-4xl lg:text-7xl">Get to know us.</h3>
      </div>
    </section>
   );
}
 
export default Hero;