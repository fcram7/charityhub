import UpdatesContent from './UpdatesContent';

interface detailContent {
  story: boolean,
  updates: boolean,
  index: number,
  charityDescription: string,
  roadmap?: {
    initiation?: boolean,
    funding?: boolean,
    fundingTransfer?: boolean,
    finished?: boolean
  }
}

const DetailContent = ({ story, updates, index, charityDescription, roadmap }: detailContent) => {
  if(story) {
    return ( 
      <div className="description-detail">
        <h2 className="lg:text-3xl">Story</h2>
        <p className="charity-description mt-6">
          {charityDescription}
        </p>
      </div>
    );
  }

  if(updates) {
    return ( 
      <div className="description-detail mt-6">
        <h2 className="lg:text-3xl">Updates</h2>
        <div className="charity-updates mt-6 px-24 grid gap-10">
          { 
            roadmap && (
              <>
                {
                  roadmap.initiation && <UpdatesContent updateNumber={index + 1} updateName="Initiation"/>
                }
                {
                  roadmap.funding && <UpdatesContent updateNumber={index + 2} updateName="Funding"/>
                }
                {
                  roadmap.fundingTransfer && <UpdatesContent updateNumber={index + 3} updateName="Funding Transfer"/>
                }
                {
                  roadmap.finished && <UpdatesContent updateNumber={index + 4} updateName="Finished"/>
                }
              </>
            )
          }
        </div>
      </div>
    );
  }
}
 
export default DetailContent;