import PageSection from '../../components/PageSection';

const Hero = () => {
  return ( 
    <PageSection bgColor="bg-slate-200" paddingY="py-24">
      <div className="section-titles flex flex-col items-center gap-4">
        <h1 className="section-title font-clashGrotesk font-bold text-center lg:text-[14rem]">Charities</h1>
        <h3 className="section-subtitle font-instrument lg:text-6xl">All charities Data</h3>
      </div>
    </PageSection>
   );
}
 
export default Hero;