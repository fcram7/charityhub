import PageSection from '../../components/PageSection';
import CharityDetailTemplate1 from "/charity-4.jpg";

const MainDetail = () => {
  return ( 
    <PageSection paddingY="py-20" bgColor="bg-slate-200">
      <div className="main-detail-content flex gap-6">
        <div className="left">
          <img src={CharityDetailTemplate1} alt="Charity Detail" />
        </div>

        <div className="right">
          <h2 className="charity-name">Lorem ipsum dolor sit amet.</h2>
        </div>
      </div>
    </PageSection>
   );
}
 
export default MainDetail;