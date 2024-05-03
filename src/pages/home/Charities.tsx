import CharityCard from './components/CharityCard';

const Charities = () => {
  return ( 
    <section className="charities-section px-[5%] lg:px-[2%] py-28 lg:py-48 bg-slate-100">
      <div className="section-title-container flex justify-center">
        <h1 className="section-title font-instrument text-4xl sm:leading-relaxed sm:text-5xl lg:text-6xl sm:w-[50%] lg:w-[40%] lg:leading-normal text-center">Empathy goes a long way, everywhere.</h1>
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