import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EventHeader = () => {
  return (
    <div className="section-top-85">
      <div className="containermw1400">
        <div className="containerpad60bottom0">
          <div className="eventheader verticalmob">
            <div className="_70pc"><Image src="https://walpole.imgix.net/events_images/the-walpole-summitBRUjM.jpg?w=3000&&fit=crop&auto=format,ehance,compress" alt="British Luxury Summit 2022 | A Radical New Vision"
                className="image100" width={3000} height={2000} /></div>
            <div className="spacer120"></div>

            <div className="_30pcmax330">
              <div className="height100">
                <div className="flex-veritcal-centre-space">
                  <div className="textcontainer400max">
                    <div className="h4class textcoral textitalic"><em>Summit</em><br />
                    </div>
                    <div className="divdividerline2010"></div>
                    <h1 className="h2class">British Luxury Summit 2022 | A Radical New Vision</h1>
                    <div className="hspacer20 spacer20"></div>
                    <div className="h5class textitalic">Join the opinion leaders and rising stars defining the future of British luxury. Open to Walpole members and non-members.</div>
                    <div className="hspacer20 spacer20"></div>
                    <div className="textbuttoncaption">
                      23rd May 2022
                    </div>
                    <div className="spacer40"></div>
                  </div>
                  <div className="div-block-28">


                    <Link href="https://www.eventbrite.co.uk/e/walpole-future-of-british-luxury-summit-2022-tickets-261778495527?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=escb" target="_blank"
                        className="linkctasolid shrinkmob w-inline-block">
                      <div className="divbtncta solid">
                        <div className="textbuttoncaption">Book tickets</div>
                        <div className="spacer15"></div><Image src="/public/assets/images/ArrowRightSmall_1.svg"
                            loading="eager" height={10} width={15} alt="" className="imgarrow" />
                      </div>
                    </Link>

                    <div className="spacer10"></div>



                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHeader;
