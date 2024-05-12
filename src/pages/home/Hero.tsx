const Hero = () => {
  return ( 
    <section className="hero-section relative px-[5%] lg:px-[2%] py-48 bg-slate-200">
      <div className="section-content relative flex">
        <div className="hero-texts flex flex-col gap-6 w-full">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-redhatdisplay ">Share <span className="text-3xl">with people</span>,</h1>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-redhatdisplay ms-24">Care <span className="text-3xl">for people</span>,</h1>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-redhatdisplay ms-40">For The Better <span className="text-3xl">of people</span>.</h1>
        </div>
      </div>
    </section>
   );
}
 
export default Hero;