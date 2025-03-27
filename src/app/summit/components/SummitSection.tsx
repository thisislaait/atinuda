// import React, { useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const SummitSection = () => {
//   useEffect(() => {
//     import('./summit-section-scripts.js').then(() => {
//       // Script loaded and executed
//     });
//   }, []);

//   return (
//     <div>
//       {/* <link rel="stylesheet" href="https://cdn.plyr.io/3.6.8/plyr.css" /> */}
//       {/* <style jsx>{`
//         .plyr--full-ui input[type=range] {
//           color: #ff595c;
//         }

//         .plyr__control--overlaid {
//           background: rgba(255, 89, 92, .8);
//         }

//         .plyr--video .plyr__control.plyr__tab-focus,
//         .plyr--video .plyr__control:hover,
//         .plyr--video .plyr__control[aria-expanded=true] {
//           background: #ff595c;
//         }

//         .plyr__control.plyr__tab-focus {
//           box-shadow: 0 0 0 5px rgba(255, 89, 92, .5);
//         }

//         .plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]::before {
//           background: #ff595c;
//         }
//       `}</style> */}
//       <div className="opacity-0 divpageload">
//         <div className="pt-21 section-top-85">
//           <div className="max-w-7xl mx-auto containermw1400">
//             <div className="pb-0 px-4 containerpad60bottom0">
//               <div className="flex flex-col md:flex-row eventheader verticalmob">
//                 <div className="md:w-7/10 _70pc"><Image src="https://walpole.imgix.net/events_images/the-walpole-summitBRUjM.jpg?w=3000&&fit=crop&auto=format,ehance,compress" alt="British Luxury Summit 2022 | A Radical New Vision"
//                     className="image100" width={3000} height={2000} /></div>
//                 <div className="h-30 spacer120"></div>

//                 <div className="md:w-3/10 max-w-sm _30pcmax330">
//                   <div className="h-full height100">
//                     <div className="flex flex-col justify-center h-full flex-veritcal-centre-space">
//                       <div className="max-w-md textcontainer400max">
//                         <div className="text-coral italic h4class textcoral textitalic"><em>Summit</em><br />
//                         </div>
//                         <div className="border-b-2 border-gray-200 divdividerline2010"></div>
//                         <h1 className="text-4xl font-bold h2class">British Luxury Summit 2022 | A Radical New Vision</h1>
//                         <div className="h-5 hspacer20 spacer20"></div>
//                         <div className="italic h5class textitalic">Join the opinion leaders and rising stars defining the future of British luxury. Open to Walpole members and non-members.</div>
//                         <div className="h-5 hspacer20 spacer20"></div>
//                         <div className="text-sm font-medium textbuttoncaption">
//                           23rd May 2022
//                         </div>
//                         <div className="h-10 spacer40"></div>
//                       </div>
//                       <div className="div-block-28">


//                         <Link href="https://www.eventbrite.co.uk/e/walpole-future-of-british-luxury-summit-2022-tickets-261778495527?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=escb" target="_blank"
//                             className="inline-block bg-coral text-white px-4 py-2 rounded-md linkctasolid shrinkmob w-inline-block">
//                           <div className="divbtncta solid">
//                             <div className="text-sm font-medium textbuttoncaption">Book tickets</div>
//                             <div className="w-4 spacer15"></div><Image src="/assets/images/ArrowRightSmall_1.svg"
//                                 loading="eager" height={10} width={15} alt="" className="w-4 h-auto imgarrow" />
//                           </div>
//                         </Link>

//                         <div className="h-2.5 spacer10"></div>



//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="section">
//           <div className="containermw1400">
//             <div className="containerpad60bottom0">
//               <div className="eventheader verticalmob">
//                 <div className="max700">
//                   <div><p>Join us in-person on the 23rd May at the capital&#39;s newest hotel, The Londoner, for the<strong> British Luxury Summit 2022 | A Radical New Vision.</strong></p><p>Luxury is set for its biggest-ever bounce back: the global luxury market could reach €370 billion by 2025, an increase of €150 billion in 2020, according to analysts. But how can British luxury brands take advantage of that potential? Who will be the winners and the losers? And what lessons have been learned after the pandemic?</p><p>We will explore these questions, as well as the power, purpose and paradox at the heart of a luxury industry in flux, on Monday 23rd May at this year’s Walpole Summit.</p><p>The event will bring together over 300 luxury professionals and expert speakers as we share unique insights, exclusive analysis and cutting-edge research – and take a detailed look at what’s next for British luxury.</p><p><strong>This years speakers include:</strong></p><p><span>Tom Athron, CEO, </span><Link href="https://www.fortnumandmason.com/"><strong>Fortnum & Mason</strong></Link><span></span></p><p><span>Rosie Blau, Editor of </span><Link href="https://www.economist.com/1843"><strong>1843 magazine, The Economist</strong></Link><span></span></p><p><span>Stuart Cassells, General Manager, </span><Link href="https://www.themacallan.com/en"><strong>The Macallan Estate</strong></Link><span></span></p><p><span>Kev Chesters, Co-Founder & Strategy Partner, </span><Link href="https://harbour.london/"><strong>Harbour Collective</strong></Link><span></span></p><p><span>Frances Christie, Deputy Chairman,<strong> </strong></span><Link href="https://www.sothebys.com/en/?locale=en"><strong>Sotheby&#39;s UK and Ireland</strong></Link><span></span></p><p><span>Marie-Claire Daveu, Chief Sustainability & Institutional Affairs Officer,<strong> </strong></span><Link href="https://www.kering.com/en/"><strong>Kering</strong></Link><span></span></p><p><span>Brian Duffy, CEO, </span><Link href="https://www.watches-of-switzerland.co.uk/?utm_source=google&utm_medium=cpc&utm-campaign=G%20-%20WOS%20-%20Search%20-%20Trademark%20-%20O%20-%20TM%20-%20Pure&gclid=Cj0KCQjwyMiTBhDKARIsAAJ-9VsHKWsT61jBZUi-j1XWz_S9QBQLbhezqrC-1jfmBaW-jHVWEMT0FA0aAujGEALw_wcB"><strong>The Watches of Switzerland Group</strong></Link><span></span></p><p><span>Leanne Elliott-Young, Co-Founder & CEO, </span><Link href="https://institute-digital.fashion/"><strong>The Institute of Digital Fashion</strong></Link><span></span></p><p><span>Ian Earnshaw, Commercial Director, </span><Link href="https://www.mulberry.com/gb/"><strong>Mulberry&nbsp;</strong></Link><span></span></p><p><span>Tom Grogan, CEO,<strong> </strong></span><Link href="https://mdrx.tech/"><strong>MDRxTECH LLP</strong></Link><span></span></p><p><span>Sam Falic, Co-Founder & President, </span><Link href="https://blockbar.com/"><strong>BlockBar</strong></Link><span></span></p><p><span>Misan Harriman, Founder </span><Link href="https://www.whatweseee.com/"><strong>What We Seee</strong> </Link><span>and Chair,</span><Link href="https://www.southbankcentre.co.uk/"> <strong>The Southbank Centre</strong></Link><span></span></p><p><span>Adam Knight, Co-Founder, </span><Link href="https://www.tong.global/"><strong>TONG</strong></Link><span></span></p><p><span>Helen McCabe-Young, Senior Vice President Marketing, </span><Link href="https://www.virtuoso.com/travel"><strong>Virtuoso Travel</strong></Link><span></span></p><p><span>Sharan Pasricha, Founder and Co-CEO,<strong> </strong></span><Link href="https://ennismore.com/"><strong>Ennismore</strong></Link><span></span></p><p><span>Filippo Prete, Associate Partner, </span><Link href="https://www.bain.com/"><strong>Bain & Company</strong></Link><span></span></p><p><span>Bill Prince, Acting Editor-in-Chief, </span><Link href="https://www.wallpaper.com/"><strong>Wallpaper*</strong></Link><span></span></p><p><span>Anant Sharma, CEO, </span><Link href="https://www.matterofform.com/"><strong>Matter Of Form</strong></Link><span></span></p><p><span>Sarah Shannon, Editorial Director,<strong> </strong></span><Link href="https://www.voguebusiness.com/"><strong>Vogue Business</strong></Link><span></span></p><p><span>Jacques Stern, President & CEO, </span><Link href="https://www.globalblue.com/"><strong>Global Blue</strong></Link><span></span></p><p><span>Dana Thomas, Contributing European Sustainability Editor,<strong> </strong></span><Link href="https://www.vogue.co.uk/"><strong>British Vogue</strong></Link><span></span></p><p><span>Michael Ward, Managing Director, </span><Link href="https://www.harrods.com/en-gb/"><strong>Harrods</strong></Link><span></span></p><p><span>Katy Wickremesinghe, Founde<strong>r, </strong></span><Link href="https://ktwlondon.com/"><strong>KTW</strong></Link><strong> & </strong><Link href="https://thewickculture.com/"><strong>The Wick</strong></Link><span></span></p><p><strong><span>WALPOLE MEMBERS: PLEASE EMAIL </span><a href="../cdn-cgi/l/email-protection.html" className="__cf_email__" data-cfemail="3a68696c6a7a4d5b564a55565f5848534e534952564f424f4843145955144f51">[email&#160;protected]</a><span> TO REQUEST YOUR ACCESS CODE FOR MEMBER RATE TICKETS.</span></strong></p><p><span><i>Walpole</i> <i>Member tickets are priced from £ 495 + VAT & fees.</i></span></p><p><span><i>Non member tickets are priced from £825+ VAT & fees.</i></span></p><p><strong><span>Tickets can be </span></strong><Link href="https://www.eventbrite.co.uk/e/walpole-future-of-british-luxury-summit-2022-tickets-261778495527?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=escb"><strong>purchased here.</strong>&nbsp;</Link><span></span></p><p><span>Ticket numbers are limited - so please </span><Link href="https://www.eventbrite.co.uk/e/walpole-future-of-british-luxury-summit-2022-tickets-261778495527?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=escb"><strong>BOOK NOW </strong></Link><span>to guarantee your place.</span></p><p>&nbsp;</p><p><br />&nbsp;</p></div>
//                 </div>
//                 <div className="h-30 spacer120"></div>
//                 <div className="md:w-3/10 max-w-sm _30pcmax330">
//                   <div className="h-full height100">
//                     <div className="flex flex-col justify-center h-full flex-veritcal-centre-space">
//                       <div className="div-block-30">
//                         <div className="bg-coral linedividercoral"></div>
//                         <div className="h-5 spacer20"></div>
//                         <div className="speakerinfo">
//                           <div className="text-sm font-medium textbuttoncaption">Speakers</div>
//                           <div className="text-sm font-medium text-coral textbuttoncaption textcoral"><span id="speaker_number">1</span>
//                             / 7</div>
//                         </div>
//                         <div data-animation="slide" data-duration="500" data-infinite="1"
//                             className="w-slider eventslider w-slider">
//                           <div className="w-slider-mask">
//                             <div className="w-slide">
//                               <div className="eventslide"><Image
//                                   src="https://walpole.imgix.net/speakers_images/brian-duffy8OmtN.jpg?w=200&h=200&fit=crop&auto=format,ehance,compress"
//                                   loading="eager"
//                                   alt="Walpole Speaker Brian Duffy"
//                                   className="eventslideimage" style={{ borderRadius: '50%' }} width={200} height={200} />
//                                 <div className="h-5 spacer20"></div>
//                                 <div className="divspeakercaption">
//                                   <h4 className="text-center textcentre">Brian Duffy</h4>
//                                   <div className="h-1 spacer5"></div>
//                                   <div className="text-coral text-center text-sm font-medium texttag textcentre textcoral">
//                                     Chief Executive<br /></div>
//                                   <h4 className="italic text-center textitalic">
//                                     Watches of Switzerland</h4>
//                                 </div>
//                                 <div className="h-5 spacer20"></div>
//                                 <Link href="speakers/brian-duffy.html"
//                                     className="inline-block linkmore w-inline-block">
//                                   <div className="divbtnlink">
//                                     <div className="text-sm font-medium textbuttoncaption">Read more</div>
//                                     <div className="w-4 spacer15"></div><Image
//                                         src="/assets/images/ArrowRightSmall_1.svg"
//                                         loading="eager" alt="" className="w-4 h-auto imgarrow" width={15} height={10} />
//                                   </div>
//                                 </Link>
//                               </div>
//                             </div>
//                             <div className="w-slide">
//                               <div className="eventslide"><Image
//                                   src="https://walpole.imgix.net/speakers_images/dana-thomasgEzTM.jpg?w=200&h=200&fit=crop&auto=format,ehance,compress"
//                                   loading="eager"
//                                   alt="Walpole Speaker Dana Thomas"
//                                   className="eventslideimage" style={{ borderRadius: '50%' }} width={200} height={200} />
//                                 <div className="h-5 spacer20"></div>
//                                 <div className="divspeakercaption">
//                                   <h4 className="text-center textcentre">Dana Thomas</h4>
//                                   <div className="h-1 spacer5"></div>
//                                   <div className="text-coral text-center text-sm font-medium texttag textcentre textcoral">
//                                     <br /></div>
//                                   <h4 className="italic text-center textitalic">
//                                     British Vogue</h4>
//                                 </div>
//                                 <div className="h-5 spacer20"></div>
//                                 <Link href="speakers/dana-thomas.html"
//                                     className="inline-block linkmore w-inline-block">
//                                   <div className="divbtnlink">
//                                     <div className="text-sm font-medium textbuttoncaption">Read more</div>
//                                     <div className="w-4 spacer15"></div><Image
//                                         src="/assets/images/ArrowRightSmall_1.svg"
//                                         loading="eager" alt="" className="w-4 h-auto imgarrow" width={15} height={10} />
//                                   </div>
//                                 </Link>
//                               </div>
//                             </div>
//                             <div className="w-slide">
//                               <div className="eventslide"><Image
//                                   src="https://walpole.imgix.net/speakers_images/federica-levatoNkaQO.jpg?w=200&h=200&fit=crop&auto=format,ehance,compress"
//                                   loading="eager"
//                                   alt="Walpole Speaker Federica Levato"
//                                   className="eventslideimage" style={{ borderRadius: '50%' }} width={200} height={200} />
//                                 <div className="h-5 spacer20"></div>
//                                 <div className="divspeakercaption">
//                                   <h4 className="text-center textcentre">Federica Levato</h4>
//                                   <div className="h-1 spacer5"></div>
//                                   <div className="text-coral text-center text-sm font-medium texttag textcentre textcoral">
//                                     <br /></div>
//                                   <h4 className="italic text-center textitalic">
//                                     Bain & Company</h4>
//                                 </div>
//                                 <div className="h-5 spacer20"></div>
//                                 <Link href="speakers/federica-levato.html"
//                                     className="inline-block linkmore w-inline-block">
//                                   <div className="divbtnlink">
//                                     <div className="text-sm font-medium textbuttoncaption">Read more</div>
//                                     <div className="w-4 spacer15"></div><Image
//                                         src="/assets/images/ArrowRightSmall_1.svg"
//                                         loading="eager" alt="" className="w-4 h-auto imgarrow" width={15} height={10} />
//                                   </div>
//                                 </Link>
//                               </div>
//                             </div>
//                             <div className="w-slide">
//                               <div className="eventslide"><Image
//                                   src="https://walpole.imgix.net/speakers_images/kevin-chesters-strategy-partner-harbour-londonV5AJ9.jpg?w=200&h=200&fit=crop&auto=format,ehance,compress"
//                                   loading="eager"
//                                   alt="Walpole Speaker Kevin Chesters"
//                                   className="eventslideimage" style={{ borderRadius: '50%' }} width={200} height={200} />
//                                 <div className="h-5 spacer20"></div>
//                                 <div className="divspeakercaption">
//                                   <h4 className="text-center textcentre">Kevin Chesters</h4>
//                                   <div className="h-1 spacer5"></div>
//                                   <div className="text-coral text-center text-sm font-medium texttag textcentre textcoral">
//                                     Strategy Partner and Co-Owner<br /></div>
//                                   <h4 className="italic text-center textitalic">
//                                     Harbour London</h4>
//                                 </div>
//                                 <div className="h-5 spacer20"></div>
//                                 <Link href="speakers/kevin-chesters-strategy-partner-harbour-london.html"
//                                     className="inline-block linkmore w-inline-block">
//                                   <div className="divbtnlink">
//                                     <div className="text-sm font-medium textbuttoncaption">Read more</div>
//                                     <div className="w-4 spacer15"></div><Image
//                                         src="/assets/images/ArrowRightSmall_1.svg"
//                                         loading="eager" alt="" className="w-4 h-auto imgarrow" width={15} height={10} />
//                                   </div>
//                                 </Link>
//                               </div>
//                             </div>
//                             <div className="w-slide">
//                               <div className="eventslide"><Image
//                                   src="https://walpole.imgix.net/speakers_images/kim-walkerKAxjE.jpg?w=200&h=200&fit=crop&auto=format,ehance,compress"
//                                   loading="eager"
//                                   alt="Walpole Speaker Kim Walker"
//                                   className="eventslideimage" style={{ borderRadius: '50%' }} width={200} height={200} />
//                                 <div className="h-5 spacer20"></div>
//                                 <div className="divspeakercaption">
//                                   <h4 className="text-center textcentre">Kim Walker</h4>
//                                   <div className="h-1 spacer5"></div>
//                                   <div className="text-coral text-center text-sm font-medium texttag textcentre textcoral">
//                                     Strategy Partner<br /></div>
//                                   <h4 className="italic text-center textitalic">
//                                     Harbour Collective</h4>
//                                 </div>
//                                 <div className="h-5 spacer20"></div>
//                                 <Link href="speakers/kim-walker.html"
//                                     className="inline-block linkmore w-inline-block">
//                                   <div className="divbtnlink">
//                                     <div className="text-sm font-medium textbuttoncaption">Read more</div>
//                                     <div className="w-4 spacer15"></div><Image
//                                         src="/assets/images/ArrowRightSmall_1.svg"
//                                         loading="eager" alt="" className="w-4 h-auto imgarrow" width={15} height={10} />
//                                   </div>
//                                 </Link>
//                               </div>
//                             </div>
//                             <div className="w-slide">
//                               <div className="eventslide"><Image
//                                   src="https://walpole.imgix.net/speakers_images/michael-ward-managing-director-harrods5lHu2.jpg?w=200&h=200&fit=crop&auto=format,ehance,compress"
//                                   loading="eager"
//                                   alt="Walpole Speaker Michael Ward"
//                                   className="eventslideimage" style={{ borderRadius: '50%' }} width={200} height={200} />
//                                 <div className="h-5 spacer20"></div>
//                                 <div className="divspeakercaption">
//                                   <h4 className="text-center textcentre">Michael Ward</h4>
//                                   <div className="h-1 spacer5"></div>
//                                   <div className="text-coral text-center text-sm font-medium texttag textcentre textcoral">
//                                     Managing Director<br /></div>
//                                   <h4 className="italic text-center textitalic">
//                                     Harrods</h4>
//                                 </div>
//                                 <div className="h-5 spacer20"></div>
//                                 <Link href="speakers/michael-ward-managing-director-harrods.html"
//                                     className="inline-block linkmore w-inline-block">
//                                   <div className="divbtnlink">
//                                     <div className="text-sm font-medium textbuttoncaption">Read more</div>
//                                     <div className="w-4 spacer15"></div><Image
//                                         src="/assets/images/ArrowRightSmall_1.svg"
//                                         loading="eager" alt="" className="w-4 h-auto imgarrow" width={15} height={10} />
//                                   </div>
//                                 </Link>
//                               </div>
//                             </div>
//                             <div className="w-slide">
//                               <div className="eventslide"><Image
//                                   src="https://walpole.imgix.net/speakers_images/sam-falic8XEc4.jpg?w=200&h=200&fit=crop&auto=format,ehance,compress"
//                                   loading="eager"
//                                   alt="Walpole Speaker Sam Falic"
//                                   className="eventslideimage" style={{ borderRadius: '50%' }} width={200} height={200} />
//                                 <div className="h-5 spacer20"></div>
//                                 <div className="divspeakercaption">
//                                   <h4 className="text-center textcentre">Sam Falic</h4>
//                                   <div className="h-1 spacer5"></div>
//                                   <div className="text-coral text-center text-sm font-medium texttag textcentre textcoral">
//                                     Co-founder & President<br /></div>
//                                   <h4 className="italic text-center textitalic">
//                                     BlockBar</h4>
//                                 </div>
//                                 <div className="h-5 spacer20"></div>
//                                 <Link href="speakers/sam-falic.html"
//                                     className="inline-block linkmore w-inline-block">
//                                   <div className="divbtnlink">
//                                     <div className="text-sm font-medium textbuttoncaption">Read more</div>
//                                     <div className="w-4 spacer15"></div><Image
//                                         src="/assets/images/ArrowRightSmall_1.svg"
//                                         loading="eager" alt="" className="w-4 h-auto imgarrow" width={15} height={10} />
//                                   </div>
//                                 </Link>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="left-arrow-5 w-slider-arrow-left"><Image
//                               src="/assets/images/SpeakerCarouselArrowLeft.svg" loading="eager" alt=""
//                               className="image-25" width={30} height={30} /></div>
//                           <div className="right-arrow-5 w-slider-arrow-right"><Image
//                               src="/assets/images/SpeakerCarouselArrowRight.svg" loading="eager" alt=""
//                               className="image-26" width={30} height={30} /></div>
//                           <div className="slide-nav-4 w-slider-nav w-round"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


//       <footer className="section colourbgdarkblue">
//         <div className="containermw1400">
//           <div className="containerpad60">
//             <div className="divfooter">
//               <div className="divfootericoncolumn">
//                 <Image src="/assets/images/w_icon_footer.svg" loading="eager" alt="" width={50} height={50} />
//               </div>
//               <div className="divfooterlinkcolumn">
//                 <Link href="../contact.html" className="linkfooter w-inline-block">
//                   <div className="divbtnlinkfooter white">
//                     <div className="textnav textwhite">Contact us</div>
//                     <div className="divarrow">
//                       <Image src="/assets/images/ArrowRightSmall.svg" loading="eager" alt="Arrow Icon" className="imgarrow" width={15} height={10} />
//                     </div>
//                   </div>
//                 </Link>
//                 <div className="divbtnlinkfooter white">
//                   <div className="textnav textwhite">Follow us</div>
//                 </div>
//                 <div className="divsocialprofile">
//                   <a href="https://www.instagram.com/walpole_uk" target="_blank"
//                       className="linksocialprofile w-inline-block"><Image src="/assets/images/instagram.svg" loading="eager"
//                         alt="" width={20} height={20} /></a>
//                   <a href="https://www.facebook.com/Walpole.UK/" target="_blank"
//                       className="linksocialprofile w-inline-block"><Image src="/assets/images/facebook.svg" loading="eager"
//                         alt="" width={20} height={20} /></a>
//                   <a href="https://twitter.com/walpole_uk" target="_blank" className="linksocialprofile w-inline-block"><Image
//                       src="/assets/images/twitter.svg" loading="eager" alt="" width={20} height={20} /></a>
//                   <a href="https://www.linkedin.com/company/walpole-uk" target="_blank"
//                       className="linksocialprofile w-inline-block"><Image src="/assets/images/LinkedIn.svg" loading="eager"
//                         alt="" width={20} height={20} /></a>
//                 </div>
//               </div>
//               <div className="divfooterlinkcolumn">
//                 <Link href="../become-a-member.html" className="linkfooter w-inline-block">
//                   <div className="divbtnlinkfooter white">
//                     <div className="textnav textwhite">Membership enquiry</div>
//                     <div className="divarrow">
//                       <Image src="/assets/images/ArrowRightSmall.svg" loading="eager" alt="Arrow Icon" className="imgarrow" width={15} height={10} />
//                     </div>
//                   </div>
//                 </Link>
//                 <Link href="../become-a-partner.html" className="linkfooter w-inline-block">
//                   <div className="divbtnlinkfooter white">
//                     <div className="textnav textwhite">Partnership enquiry</div>
//                     <div className="divarrow">
//                       <Image src="/assets/images/ArrowRightSmall.svg" loading="eager" alt="Arrow Icon" className="imgarrow" width={15} height={10} />
//                     </div>
//                   </div>
//                 </Link>
//                 <Link href="../apply-for-walpole-brands-of-tomorrow.html" className="linkfooter w-inline-block">
//                   <div className="divbtnlinkfooter white">
//                     <div className="textnav textwhite">Brands of Tomorrow enquiry</div>
//                     <div className="divarrow">
//                       <Image src="/assets/images/ArrowRightSmall.svg" loading="eager" alt="Arrow Icon" className="imgarrow" width={15} height={10} />
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//               <div className="divfooterformcolumn">
//                 <div className="divbtnlinkfooter white">
//                   <div className="textnav textcoral">Newsletter signup</div>
//                 </div>
//                 <div className="form-block w-form">
//                   <form className="form" action="https://www.thewalpole.co.uk/enquiry-subscribe" method="POST">
//                     <input type="hidden" name="_token" value="JxFvZ44M75XNgvqNvt9eBippXpCKkGqJtzRXf1cY" />                 <input type="hidden" name="type" value="newsletter" />
//                     <div className="div-block-2">
//                       <input type="text" className="footerfield w-input" maxLength={256} name="first_name"
//                           placeholder="First Name" required />
//                       <input type="text" className="footerfield w-input" maxLength={256} name="last_name"
//                           placeholder="Last Name" required />
//                       <input type="text" className="footerfield w-input" maxLength={256} name="company"
//                           placeholder="Company" />
//                     </div>
//                     <div className="div-block-2">
//                       <input type="email" className="footerfieldemail w-input" maxLength={256} name="email"
//                           placeholder="Email" required />
//                       <input type="submit" value="SUBMIT" className="submit-button w-button" />
//                     </div>
//                   </form>
//                 </div>
//               </div>
//               <div className="divfootertermscolumn">
//                 <div className="divbtnlinktermsfooter white">
//                   <Link href="../terms-conditions.html" className="linkterms w-inline-block">
//                     <div className="textnav textwhite">Terms & Conditions</div>
//                   </Link>
//                   <Link href="../cookies-privacy-policy.html" className="linkterms w-inline-block">
//                     <div className="textnav textwhite">Cookie Policy</div>
//                   </Link>
//                   <Link href="#" className="linkterms w-inline-block">
//                     <div className="textnav textwhite">VAT No : 577365205</div>
//                   </Link>
//                   <a href="https://www.nous.partners/" target="_blank" className="linkterms w-inline-block">
//                     <div className="textnav textwhite"><span className="text-span">Site by nous</span></div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default SummitSection;
