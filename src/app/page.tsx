import Navbar from '../app/components/navbar/Navbar';
import { AccordionMenu } from './components/AccordionMenu';
import AutoScrollCards from './components/AutoScrollCards';
import FormPage from './components/Form';
export default function Home() {
  return (
    <>
      <Navbar />
      <main className='w-fit'>
        <div className='lg:relative'>
          <div className=' bg-black  h-56 md:h-78 lg:w-[606px] lg:h-[738px]'>
            <div className="lg:absolute lg:top-0 lg:left-0 lg:z-20 lg:w-full lg:flex lg:pl-8">
            <h1 className='text-5xl text-left text-white pl-5 pr-8 pt-14 font-bold self-stretch md:text-[73px] md:pt-26 md:pr-32 lg:text-[73px] lg:w-[770px]'>Your Trusted Handyman for All Home Repairs & Improvements</h1>
            </div>
          </div>

            <div className="aspect-square bg-no-repeat bg-cover bg-center bg-[url('/assets/images/Rectangle1.png')]  pt-25 px-5 md:pt-45  lg:w-[944px] lg:h-[881px] lg:mt-[-738px] lg:-z-0 lg:absolute lg:right-0">

            <div className="lg:ml-[-400px] lg:mt-[250px] lg:w-[632px] lg:px-5">
              <p className='text-white text-[16px] font-normal md:text-xl lg:text-[16px]'>
                Looking for a reliable handyman who gets the job done right the first time? At JMG HandyMan Services, we provide top-quality home improvement and repair solutions at prices you can afford.
              </p>

              <div className='flex ml-auto mr-auto mt-7 py-4 px-6 text-white bg-[#DA2327] justify-center w-90 self-stretch items-center text-center md:w-48 md:mr-0 md:ml-0 md:mt-24 lg:mt-[30px]'>Request A Quote</div>
            </div>
            </div>
        </div>

        <div className='flex w-full flex-col items-start pt-18 pl-5 pr-5 lg:mt-50 lg:pl-12' id='Why Choose Us'>
          <h2 className='text-[#DA2327] text-[20px] font-semibold'> Why Choose JMG HandyMan Services?</h2>

          <h2 className='pt-5 text-black text-4xl md:text-6xl font-bold lg:w-[848px] lg:text-[53px]'>“...Years of expertise in home repairs and renovations.”</h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-18 px-5 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-12">
          <div className='flex h-56 p-5 flex-col items-start gap-4 rounded-sm bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.25)]'>
            <div className=" bg-[url('/assets/icons/320f0343cb47f69d2d677c49fdb3deff13d100a6.gif')] w-14 h-14 bg-cover"/>
            <div>
              <h2 className='text-black self-stretch text-2xl font-semibold'>Experienced & Skilled Professionals</h2>
              <p className='text-base mt-2 font-normal'>Years of expertise in home repairs and renovations</p>
            </div>
          </div>

          <div className='flex h-56 p-5 flex-col items-start gap-4 rounded-sm bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.25)]'>
            <div className=" bg-[url('/assets/icons/02704c1d4cab34a07f2e4cadc70b063f799cad24.gif')] w-14 h-14 bg-cover"/>
            <div>
              <h2 className='text-black self-stretch text-2xl font-semibold'>Affordable & Transparent Pricing</h2>
              <p className='text-base mt-2 font-normal'>No hidden fees, just honest and fair pricing.</p>
            </div>
          </div>

          <div className='flex h-56 p-5 flex-col items-start gap-4 rounded-sm bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.25)]'>
            <div className=" bg-[url('/assets/icons/f5767a59b9e5b86b05815ee49195e58e61638947.gif')] w-14 h-14 bg-cover "/>
            <div>
              <h2 className='text-black self-stretch text-2xl font-semibold'>On-Time & Reliable Service</h2>
              <p className='text-base mt-2 font-normal'>We respect your time and show up when we say we will</p>
            </div>
          </div>

          <div className='flex h-56 p-5 flex-col items-start gap-4 rounded-sm bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.25)]'>
            <div className=" bg-[url('/assets/icons/320f0343cb47f69d2d677c49fdb3deff13d100a6.gif')] w-14 h-14 bg-cover "/>
            <div>
              <h2 className='text-black self-stretch text-2xl font-semibold'>High-Quality Craftsmanship</h2>
              <p className='text-base mt-2 font-normal'>Attention to detail ensures long-lasting results.</p>
            </div>
          </div>

          <div className='flex h-56 p-5 flex-col items-start gap-4 rounded-sm bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.25)]'>
            <div className=" bg-[url('/assets/icons/90c195f32937ccfa963fd961b5ad1fbf3395f923.gif')] w-14 h-14 bg-cover "/>
            <div>
              <h2 className='text-black self-stretch text-2xl font-semibold'>Customer Satisfaction Guaranteed</h2>
              <p className='text-base mt-2 font-normal'>We aren’t happy until you are!</p>
            </div>
          </div>

          <div className='flex h-56 p-5 flex-col items-start gap-4 rounded-sm bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.25)]'>
            <div className=" bg-[url('/assets/icons/e587feae06b973fa498001c117803ee6bc83b854.gif')] w-14 h-14 bg-cover "/>
            <div>
              <h2 className='text-black self-stretch text-2xl font-semibold'>Licensed & Insured</h2>
              <p className='text-base mt-2 font-normal'>Ensuring peace of mind with every project.</p>
            </div>
          </div>
        </div>

        <div className='flex w-fit flex-col items-start pt-18 pl-5 pr-5 lg:pl-12' id='Services'>
          <h2 className='text-[#DA2327] text-[20px] font-semibold'> Our Services</h2>

          <h2 className='pt-5 text-black text-4xl md:text-6xl font-bold'>“...We are committed to excellence, now and always.”</h2>
        </div>

        <div className='flex pt-10 pl-5 pr-5 aspect-video lg:px-12'>
          <div className="bg-[url('/assets/images/Rectangle8.png')] bg-cover bg-center bg-no-repeat w-full"/>
          <div className="bg-[url('/assets/images/Rectangle7.png')] bg-cover bg-center bg-no-repeat w-full"/>
          <div className="bg-[url('/assets/images/Rectangle9.png')] bg-cover bg-center bg-no-repeat w-full"/>
        </div>

        <div className ='grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-15 pt-18 px-5 lg:grid lg:grid-cols-4 lg:gap-20 lg:px-12' >
          <div className='flex flex-col  items-start'>
            <div className='w-20 h-16 relative'>
              <div className='w-10 h-10 bg-[#DA2327] p-2 text-white text-base font-semibold rounded-full text-center absolute top-0 left-2'> 1</div>

               <div className=" bg-[url('/assets/icons/56a19ec5be8c64dcfe08d2e4219c910bf8e1a54a.gif')] w-16 h-16 bg-cover -mt-8 ml-8 " />
            </div>

            <div className='pl-2 pr-2'>
              <h2 className='text-2xl font-semibold'>General Home Repairs</h2>
              <p className='text-base font-medium pt-3'>Fixing leaks, drywall patching, and more.</p>
            </div>
          </div>

          <div className='flex flex-col  items-start'>
            <div className='w-20 h-16 relative'>
              <div className='w-10 h-10 bg-[#DA2327] p-2 text-white text-base font-semibold rounded-full text-center absolute top-0 left-2'> 2</div>

               <div className=" bg-[url('/assets/icons/bc52c4e3b268a6deafd5a4b3ff0b2359ef7a913e.gif')] w-16 h-16 bg-cover -mt-8 ml-8 " />
            </div>

            <div className='pl-2 pr-2'>
              <h2 className='text-2xl font-semibold'>Door & Window Installation</h2>
              <p className='text-base font-medium pt-3'>Secure, energy-efficient upgrades.</p>
            </div>
          </div>

          <div className='flex flex-col  items-start'>
            <div className='w-20 h-16 relative'>
              <div className='w-10 h-10 bg-[#DA2327] p-2 text-white text-base font-semibold rounded-full text-center absolute top-0 left-2'> 3</div>

               <div className=" bg-[url('/assets/icons/c1b3f247919a6133bf484c46622b6c5d8c7e4de0.gif')] w-16 h-16 bg-cover -mt-8 ml-8 " />
            </div>

            <div className='pl-2 pr-2'>
              <h2 className='text-2xl font-semibold'>Furniture Assembly</h2>
              <p className='text-base font-medium pt-3'>Professional assembly for all types of furniture.</p>
            </div>
          </div>

          <div className='flex flex-col  items-start'>
            <div className='w-20 h-16 relative'>
              <div className='w-10 h-10 bg-[#DA2327] p-2 text-white text-base font-semibold rounded-full text-center absolute top-0 left-2'> 4</div>

               <div className=" bg-[url('/assets/icons/814055729e7a962da376c80600a697b4e8504a14.gif')] w-16 h-16 bg-cover -mt-8 ml-8 " />
            </div>

            <div className='pl-2 pr-2'>
              <h2 className='text-2xl font-semibold'>Painting & Drywall Repair </h2>
              <p className='text-base font-medium pt-3'>Interior and exterior painting, touch-ups, and repairs.</p>
            </div>
          </div>

          <div className='flex flex-col  items-start'>
            <div className='w-20 h-16 relative'>
              <div className='w-10 h-10 bg-[#DA2327] p-2 text-white text-base font-semibold rounded-full text-center absolute top-0 left-2'> 5</div>

               <div className=" bg-[url('/assets/icons/7c5bff4828d1d1715da5fcf0e987c7102c906dfc.gif')] w-16 h-16 bg-cover -mt-8 ml-8 " />
            </div>

            <div className='pl-2 pr-2'>
              <h2 className='text-2xl font-semibold'>Electrical & Plumbing Repairs</h2>
              <p className='text-base font-medium pt-3'>Small electrical fixes and plumbing solutions.</p>
            </div>
          </div>

          <div className='flex flex-col  items-start'>
            <div className='w-20 h-16 relative'>
              <div className='w-10 h-10 bg-[#DA2327] p-2 text-white text-base font-semibold rounded-full text-center absolute top-0 left-2'> 6</div>

               <div className=" bg-[url('/assets/icons/cd5f571e9f491aa8b91603dc2460239892d4b902.gif')] w-16 h-16 bg-cover -mt-8 ml-8 " />
            </div>

            <div className='pl-2 pr-2'>
              <h2 className='text-2xl font-semibold'>Pressure Washing & Gutter Cleaning</h2>
              <p className='text-base font-medium pt-3'>Maintain your home’s exterior with ease.</p>
            </div>
          </div>

          <div className='flex flex-col  items-start'>
            <div className='w-20 h-16 relative'>
              <div className='w-10 h-10 bg-[#DA2327] p-2 text-white text-base font-semibold rounded-full text-center absolute top-0 left-2'> 7</div>

               <div className=" bg-[url('/assets/icons/ffb37f89a000a2bc692d78077d71d47af4c81c0d.gif')] w-16 h-16 bg-cover -mt-8 ml-8 " />
            </div>

            <div className='pl-2 pr-2'>
              <h2 className='text-2xl font-semibold'>Carpentry & Custom Woodwork</h2>
              <p className='text-base font-medium pt-3'>Shelving, cabinets, trim work, and more.</p>
            </div>
          </div>

          <div className='flex flex-col  items-start'>
            <div className='w-20 h-16 relative'>
              <div className='w-10 h-10 bg-[#DA2327] p-2 text-white text-base font-semibold rounded-full text-center absolute top-0 left-2'> 8</div>

               <div className=" bg-[url('/assets/icons/855020ee3cb028c1226592a8b5a753782adb048c.gif')] w-16 h-16 bg-cover -mt-8 ml-8 " />
            </div>

            <div className='pl-2 pr-2'>
              <h2 className='text-2xl font-semibold'>Lawn Maintenance</h2>
              <p className='text-base font-medium pt-3'>Spring and fall cleaning, trimming, planting, and junk hauling.</p>
            </div>
          </div>

        </div>


      <div className="lg:px-10 ">
        <div className="pt-18 pl-5 pr-2 items-center lg:w-[632px] lg:h-[731px]">
          <div className="bg-[url('/assets/images/Group1.png')]  bg-no-repeat bg-cover bg-center aspect-square"/>
        </div>

      <div className="lg:w-[584px] lg:h-[776px] lg:mt-[-736px] lg:ml-[650px]">
        <div className='flex w-fit flex-col items-start pt-18 pl-5 pr-5' id='About Us'>
          <h2 className='text-[#DA2327] text-[20px] font-semibold'> About Us</h2>

          <h2 className='pt-5 text-black text-4xl font-bold self-stretch md:text-6xl lg:text-[50px]'>“...We strive to enhance the comfort, safety, and value of your home.”</h2>

          <p className="text-base pt-5 font-normal md:pt-10 lg:text-sm">
            At JMG HandyMan Services, we take pride in delivering reliable, efficient, and high-quality handyman services to homeowners and businesses alike. No project is too big or too small—we tackle everything from minor repairs to full-scale renovations with the same level of dedication and excellence
          </p>
        </div>

        <div className='flex w-fit flex-col items-start pt-18 pl-5 pr-5 lg:mt-[-50px]'>
          <h2 className='text-[#DA2327] text-[20px] font-semibold lg:text-sm'> Our Mission</h2>

          <p className="text-base pt-5 font-normal lg:text-sm lg:pt-3">
             We strive to enhance the comfort, safety, and value of your home by providing top-tier handyman services. Every project we complete is a reflection of our commitment to excellence, integrity, and customer satisfaction.
          </p>
        </div>

          <div className='flex w-fit flex-col items-start pt-18 pl-5 pr-5 lg:mt-[-50px]'>
            <h2 className='text-[#DA2327] text-[20px] font-semibold lg:text-sm'> Our Vision</h2>

            <p className="text-base pt-5 font-normal lg:text-sm lg:pt-3">
              We aim to be the #1 trusted handyman service in our community, recognized for our honesty, craftsmanship, and dedication to exceeding expectations. We believe every homeowner deserves stress-free, high-quality home repairs and improvements.
            </p>
          </div>
      </div>
      </div>

        <div className='pt-18' id="Testimonials">
          <div className="aspect-square bg-no-repeat bg-cover bg-[url('/assets/images/Rectangle10.png')] px-5 pt-10 bg-center lg:h-[395px] lg:w-full md:h-[395px] md:w-full">
            <p className='text-center text-white text-4xl font-semibold md:text-6xl md:pt-2 lg:text-[53px]'>High-quality Services. Happy Customers</p>
          </div>
        </div>

         <AutoScrollCards/>

        <div className=" pt-20 md:pt-30 lg:px-20" id="FAQ">
          <h2 className="self-stretch font-semibold text-4xl md:text-6xl text-center">Frequently Asked Questions</h2>

          <div className='pl-5 pr-5 pt-10'>
            <AccordionMenu />
          </div>
        </div>

        <div className='flex flex-col items-center  pt-18 px-5 lg:px-12 lg:pt-30'>
          <div className=" bg-[linear-gradient(0deg,rgba(0,0,0,0)_23.43%,#000_80.8%),url('/assets/images/Frame64.png')] bg-cover bg-no-repeat bg-center w-full rounded md:pb-12 lg:w-full lg:h-[729px] lg:bg-[linear-gradient(270deg,rgba(0,0,0,0)_23.43%,#000_73.8%),url('/assets/images/Frame64.png')]">
            <div className='p-5 flex flex-col gap-4 self-stretch lg:w-[439px] lg:pl-10 lg:py-25'>
                <h2 className="self-stretch text-4xl font-semibold text-amber-50 pt-3 pl-2 md:text-6xl lg:text-[50px]">Request a Free Quote & Get Your Repairs Started!</h2>

                <p className='text-base font-normal text-white self-stretch pt-4 pl-3 pr-9 lg:text-sm'>Fill out the form to tell us what you need, and we’ll get back to you with a quick estimate. Fast, reliable, and hassle-free handyman <br />services—just one step away!</p>

                <p className='self-stretch text-white text-lg font-bold pl-3 lg:text-sm'>Or Call Us On 319-471-0593</p>

                <p className="text-[#ccc] text-lg italic font-normal pl-2 lg:text-sm">Your home deserves the best—let’s make it happen!</p>
            </div>

            <div className="p-6 lg:w-[690px] lg:p-10 lg:mt-[-600px] lg:ml-auto lg:mr-8 lg:pt-20">
              <FormPage/>
            </div>

          </div>
        </div>

        <div className='bg-black mt-18 w-full pb-10'>
          <div className='p-5'>
            <div className='md:grid md:grid-rows-3 md:pl-2 md:w-64 md:gap-6 md:mt-[-20px] lg:w-[416px]'>
                <div className='flex justify-center items-center pt-20 md:justify-start'>
                  <div className="bg-[url(/assets/logo/Bag2.jpg)] h-20 w-20 bg-cover bg-center" />
                </div>
                <h2 className='text-white text-center text-base font-normal pt-8 md:text-left md:pt-0'>At JMG HandyMan Services, we take pride in delivering reliable, efficient, and high-quality handyman services to homeowners and businesses alike. No project is too big or too small</h2>

                <div className='flex gap-4 justify-center items-center pt-8 md:justify-start md:pt-0 md:-mt-32'>
                  <div className='bg-[url(/assets/icons/facebook-02.svg)] h-8 w-8 bg-cover bg-center'/>
                  <div className='bg-[url(/assets/icons/instagram.svg)] h-8 w-8 bg-cover bg-center'/>
                  <div className='bg-[url(/assets/icons/tiktok.svg)] h-8 w-8 bg-cover bg-center'/>
                </div>
            </div>

            <div className='grid grid-row-5 gap-4 text-center items-center text-[#fff] pt-15 md:pt-0 md:mt-[-480px]'>
              <h2 className='self-stretch text-lg text-[#666] font-semibold pb-3'>QUICK LINKS</h2>
              <h3><a href="#Why Choose Us">Why Choose Us</a></h3>
              <h3><a href="#Services">Services</a></h3>
              <h3><a href="#About Us">About Us</a></h3>
              <h3><a href="#Testimonials">Testimonials</a></h3>
            </div>

            <div className='flex flex-col gap-4 text-center items-center text-[#fff] pt-15 md:ml-96 md:pt-0 md:mt-[-200px]'>
              <h2 className='self-stretch text-lg text-[#666] font-semibold'>Contact Us</h2>
              <div className="flex flex-row gap-2">
                <div className='bg-[url(/assets/icons/call-02.svg)] h-6 w-6 bg-cover bg-center'/>
                <h3>319-471-0593</h3>
              </div>

               <div className="flex flex-row gap-2">
                <div className='bg-[url(/assets/icons/mail-01.svg)] h-6 w-6 bg-cover bg-center'/>
                <h3>Email</h3>
              </div>

               <div className="flex flex-row gap-2">
                <div className='bg-[url(/assets/icons/location-06.svg)] h-6 w-6 bg-cover bg-center'/>
                <h3>463 Hwy 1 West #G43</h3>
              </div>
            </div>
          </div>

          <div className='pl-5 pr-5 md:mt-60'>
            <hr className="h-[1px] w-full"/>
          </div>

          <div className='text-center text-[#666] pt-10 px-5'>Copyright, 2025 JMG HandyMan. All Rights Reserved</div>
        </div>

      </main>
    </>
  );
}
