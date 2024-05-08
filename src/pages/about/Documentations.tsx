import PageSection from '../../components/PageSection';
import Charity1 from "/charity-1.jpg";
import Charity2 from "/charity-2.jpg";
import Charity3 from "/charity-3.jpg";
import Charity4 from "/charity-4.jpg";

const Documentations = () => {
  return ( 
    <PageSection paddingY="py-52" bgColor="bg-slate-100">
      <h1 className="section-title text-center font-instrument text-4xl md:text-6xl lg:text-7xl mb-12">Nothing goes to waste</h1>
      <div className="documentations-content grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={Charity1} alt="Charity Documentation" className="border rounded-2xl"/>
        <img src={Charity2} alt="Charity Documentation" className="border rounded-2xl"/>
        <img src={Charity3} alt="Charity Documentation" className="border rounded-2xl"/>
        <img src={Charity4} alt="Charity Documentation" className="border rounded-2xl"/>
      </div>
    </PageSection>
   );
}
 
export default Documentations;