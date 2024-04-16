import CharityCard from './components/CharityCard';

const Charities = () => {
  return ( 
    <section className="charities-section px-[5%] lg:px-[2%] py-20 lg:py-48 bg-gradient-to-b from-90% from-slate-100 to-violet-500">
      <div className="section-title-container flex justify-center">
        <h1 className="section-title font-instrument text-3xl sm:text-4xl lg:text-6xl sm:w-[50%] lg:w-[40%] leading-relaxed lg:leading-normal text-center">Empathy goes a long way, everywhere.</h1>
      </div>

      <div className="charities-content mt-12 px-10">
        <h2 className="text-xl font-semibold">Ongoing charities</h2>
        <div className="charities-card-container mt-6 flex flex-col lg:flex-row gap-4 justify-center">
          <CharityCard />
          <CharityCard />
        </div>
      </div>
    </section>
   );
}
 
export default Charities;