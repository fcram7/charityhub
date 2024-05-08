import PageSection from '../../components/PageSection';
import About1 from "/about-1.png";

const AboutCharityhub = () => {
  return ( 
    <PageSection paddingY="py-52" bgColor="bg-slate-100">
      <div className="page-section-content flex flex-col lg:flex-row items-center justify-evenly">
        <img src={About1} alt="About Charityhub."  className="w-[80%] md:w-[60%] lg:w-[40%]"/>
        <h1 className="font-instrument text-5xl w-full text-center lg:w-[40%] lg:text-start leading-relaxed">A charity platform from, by, and for Career Class friends.</h1>
      </div>
    </PageSection>
   );
}
 
export default AboutCharityhub;