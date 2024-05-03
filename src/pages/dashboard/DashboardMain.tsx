import CharityCard from './components/CharityCard';
import CharityCardContainer from './components/CharityCardContainer';

const DashboardMain = () => {
  return ( 
    <section className="dashboard-section px-[5%] py-28 bg-slate-100">
      <h1 className="section-title text-4xl font-bold font-clashGrotesk mb-24">Dashboard</h1>

      <div className="dashboard-content">
        <h1 className="ps-6 font-redhatdisplay text-2xl mb-10">Ongoing Charities</h1>
        <CharityCardContainer>
          <CharityCard />
          <CharityCard />
          <CharityCard />
        </CharityCardContainer>
      </div>
    </section>
   );
}
 
export default DashboardMain;