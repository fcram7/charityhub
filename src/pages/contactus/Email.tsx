const Email = () => {
  return ( 
    <section className="email-contact-section px-[5%] lg:px-[2%] py-36 bg-slate-200">
      <h1 className="section-title font-clashGrotesk text-center text-7xl sm:text-9xl lg:text-[14rem] font-bold">Contact</h1>
      <h3 className="section-subtitle text-center mt-3 font-instrument text-4xl sm:text-5xl leading-normal sm:leading-relaxed lg:leading-normal lg:text-6xl lg:px-[12rem]">Get to know <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-medium">charityhub.</span> and what we do to make changes.</h3>

      <div className="section-content mt-32 flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-7">
        <h3 className="font-clashGrotesk font-bold text-center leading-normal text-4xl sm:text-5xl lg:text-6xl">Kindly slide into our email</h3>
        <p className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl">charityhub@email.com</p>
      </div>
    </section>
   );
}
 
export default Email;