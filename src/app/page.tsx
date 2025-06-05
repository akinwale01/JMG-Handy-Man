import Navbar from '../app/components/navbar/Navbar';
import { AccordionMenu } from './components/AccordionMenu';
import AutoScrollCards from './components/AutoScrollCards';
import FormPage from './components/Form';
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
<section className="relative w-full lg:h-[881px] flex flex-col lg:flex-row overflow-hidden">
  {/* Text Section */}
  <div className="bg-black w-full h-56 md:h-[302px] lg:h-[738px] lg:w-[30%] z-0">

  </div>

      <div className="gap-6 flex flex-col items-start md:gap-8  lg:gap-[32px] lg:w-[650px] absolute z-10 lg:left-[80px] lg:top-[131px] top-[64px] left-[20px] right-[20px]">
      <h1 className="text-5xl font-bold text-white md:text-[73px] md:font-semibold md:self-stretch">
        Your Trusted Handyman for All Home Repairs & Improvements
      </h1>
      <p className="text-base text-white md:text-[18px] lg:w-[630px]">
        Looking for a reliable handyman who gets the job done right the first time? At JMG HandyMan Services, we provide top-quality home improvement and repair solutions at prices you can afford.
      </p>
      <button className="flex px-6 py-4 text-white text-[16px] justify-center gap-2 bg-[#DA2327] self-stretch w-full font-bold md:w-[183px] cursor-pointer hover:bg-blue-600">
        Request A Quote
      </button>
    </div>

  {/* Image Section */}
  <div className="w-full h-90 md:h-[650px] bg-no-repeat bg-cover bg-center bg-[url('/assets/images/Rectangle1.png')] lg:w-[70%] lg:h-[100%] z-0" />
</section>

    <section className='lg:max-w-[1539] lg:mx-auto'>
        <div className='flex w-full flex-col items-start pt-18  px-5 gap-4 md:gap-6 md:px-6 lg:pt-[220px] lg:px-20 lg:w-[920px]' id='Why Choose Us'>
          <h2 className='text-[#DA2327] text-[20px] font-semibold md:self-stretch'> Why Choose JMG HandyMan Services?</h2>

          <h2 className=' text-black text-4xl md:text-[53px] font-bold md:self-stretch md:font-semibold'>“...Years of expertise in home repairs and renovations.”</h2>
        </div>


        <div className="grid grid-cols-1 gap-4 items-start w-full pt-12 px-5 md:grid md:grid-cols-2 md:px-6 lg:h-[512px] lg:grid-cols-3 lg:px-20">
          <div className='flex flex-col p-5 items-start gap-4 self-stretch shadow-[0_0_8px_0_rgba(0,0,0,0.25)] h-[220px] rounded-sm md:h-[260px] md:p-10'>
            <div className=" bg-[url('/assets/icons/320f0343cb47f69d2d677c49fdb3deff13d100a6.gif')] w-14 h-14 bg-cover bg-no-repeat bg-center"/>
              <h2 className='text-black text-[20px] font-semibold'>Experienced & Skilled Professionals</h2>
              <p className='text-black text-[16px] font-normal'>Years of expertise in home repairs and renovations</p>
          </div>

          <div className='flex flex-col p-5 items-start gap-4 self-stretch shadow-[0_0_8px_0_rgba(0,0,0,0.25)] h-[220px] rounded-sm md:h-[260px] md:p-10'>
            <div className=" bg-[url('/assets/icons/02704c1d4cab34a07f2e4cadc70b063f799cad24.gif')] w-14 h-14 bg-cover bg-no-repeat bg-center"/>
              <h2 className='text-black text-[20px] font-semibold'>Affordable & Transparent Pricing</h2>
              <p className='text-black text-[16px] font-normal'>No hidden fees, just honest and fair pricing.</p>
          </div>

          <div className='flex flex-col p-5 items-start gap-4 self-stretch shadow-[0_0_8px_0_rgba(0,0,0,0.25)] h-[220px] rounded-sm md:h-[260px] md:p-10'>
            <div className=" bg-[url('/assets/icons/f5767a59b9e5b86b05815ee49195e58e61638947.gif')] w-14 h-14 bg-cover bg-center"/>
              <h2 className='text-black text-[20px] font-semibold'>On-Time & Reliable Service</h2>
              <p className='text-black text-[16px] font-normal'>We respect your time and show up when we say we will</p>
          </div>

          <div className='flex flex-col p-5 items-start gap-4 self-stretch shadow-[0_0_8px_0_rgba(0,0,0,0.25)] h-[220px] rounded-sm md:h-[260px] md:p-10'>
            <div className=" bg-[url('/assets/icons/320f0343cb47f69d2d677c49fdb3deff13d100a6.gif')] w-14 h-14 bg-cover bg-center"/>
              <h2 className='text-black text-[20px] font-semibold'>High-Quality Craftsmanship</h2>
              <p className='text-black text-[16px] font-normal'>Attention to detail ensures long-lasting results.</p>
          </div>

          <div className='flex flex-col p-5 items-start gap-4 self-stretch shadow-[0_0_8px_0_rgba(0,0,0,0.25)] h-[220px] rounded-sm md:h-[260px] md:p-10'>
            <div className=" bg-[url('/assets/icons/90c195f32937ccfa963fd961b5ad1fbf3395f923.gif')] w-14 h-14 bg-cover bg-center"/>

              <h2 className='text-black text-[20px] font-semibold'>Customer Satisfaction Guaranteed</h2>
              <p className='text-black text-[16px] font-normal'>We aren’t happy until you are!</p>
          </div>

          <div className='flex flex-col p-5 items-start gap-4 self-stretch shadow-[0_0_8px_0_rgba(0,0,0,0.25)] h-[220px] rounded-sm md:h-[260px] md:p-10'>
            <div className=" bg-[url('/assets/icons/e587feae06b973fa498001c117803ee6bc83b854.gif')] w-14 h-14 bg-cover bg-center"/>

              <h2 className='text-black text-[20px] font-semibold'>Licensed & Insured</h2>
              <p className='text-black text-[16px] font-normal'>Ensuring peace of mind with every project.</p>
          </div>
        </div>
      </section>

      <section className="lg:max-w-[1530px] lg:mx-auto">
        <div className='flex flex-col items-start pt-18 px-5 gap-4 md:gap-6 md:px-6 lg:pt-[220px] lg:px-20 lg:w-[950px]' id='Services'>
          <h2 className='text-[#DA2327] text-[20px] font-semibold'> Our Services</h2>

          <h2 className=' text-black text-4xl md:text-[53px] font-bold'>“...We are committed to excellence, now and always.”</h2>
        </div>

        <div className='flex pt-10 px-5 w-full h-64 md:pt-16 md:px-6 md:h-[450px] lg:px-20 lg:h-[800px]'>
          <div className="bg-[url('/assets/images/Rectangle8.png')] bg-cover bg-center bg-no-repeat w-full"/>
          <div className="bg-[url('/assets/images/Rectangle7.png')] bg-cover bg-center bg-no-repeat w-full"/>
          <div className="bg-[url('/assets/images/Rectangle9.png')] bg-cover bg-center bg-no-repeat w-full"/>
        </div>

        <div className ='grid grid-cols-1 pt-20 gap-14 px-5 items-center md:grid-cols-2 md:gap-14 md:px-6 lg:px-20 lg:grid-cols-4 lg:gap-10'>
          <div className='flex flex-col gap-4 items-start self-stretch'>
            <div className=' relative'>
              <div className='w-10 h-10 bg-[#DA2327] p-2 text-white text-base font-semibold rounded-full text-center absolute top-0 left-2'> 1</div>

               <div className=" bg-[url('/assets/icons/56a19ec5be8c64dcfe08d2e4219c910bf8e1a54a.gif')] w-16 h-16 bg-cover -mt-8 mx-8 " />
            </div>

              <h2 className='text-2xl font-semibold lg:text-[29px]'>General Home Repairs</h2>
              <p className='text-base font-medium'>Fixing leaks, drywall patching, and more.</p>

          </div>

          <div className='flex flex-col gap-4 items-start'>
            <div className=' relative'>
              <div className='w-10 h-10 bg-[#DA2327] p-2 text-white text-base font-semibold rounded-full text-center absolute top-0 left-2'> 2</div>

               <div className=" bg-[url('/assets/icons/bc52c4e3b268a6deafd5a4b3ff0b2359ef7a913e.gif')] w-16 h-16 bg-cover -mt-8 mx-8 " />
            </div>

              <h2 className='text-2xl font-semibold lg:text-[29px]'>Door & Window Installation</h2>
              <p className='text-base font-medium'>Secure, energy-efficient upgrades.</p>

          </div>

          <div className='flex flex-col gap-4 items-start'>
            <div className=' relative'>
              <div className='w-10 h-10 bg-[#DA2327] p-2 text-white text-base font-semibold rounded-full text-center absolute top-0 left-2'> 3</div>

               <div className=" bg-[url('/assets/icons/c1b3f247919a6133bf484c46622b6c5d8c7e4de0.gif')] w-16 h-16 bg-cover -mt-8 mx-8 " />
            </div>

              <h2 className='text-2xl font-semibold lg:text-[29px]'>Furniture Assembly</h2>
              <p className='text-base font-medium'>Professional assembly for all types of furniture.</p>

          </div>

          <div className='flex flex-col gap-4 items-start'>
            <div className='relative'>
              <div className='w-10 h-10 bg-[#DA2327] p-2 text-white text-base font-semibold rounded-full text-center absolute top-0 left-2'> 4</div>

               <div className=" bg-[url('/assets/icons/814055729e7a962da376c80600a697b4e8504a14.gif')] w-16 h-16 bg-cover -mt-8 mx-8" />
            </div>

              <h2 className='text-2xl font-semibold lg:text-[29px]'>Painting & Drywall Repair </h2>
              <p className='text-base font-medium'>Interior and exterior painting, touch-ups, and repairs.</p>

          </div>

          <div className='flex flex-col gap-4 items-start'>
            <div className='relative'>
              <div className='w-10 h-10 bg-[#DA2327] p-2 text-white text-base font-semibold rounded-full text-center absolute top-0 left-2'> 5</div>

               <div className=" bg-[url('/assets/icons/7c5bff4828d1d1715da5fcf0e987c7102c906dfc.gif')] w-16 h-16 bg-cover -mt-8 mx-8 " />
            </div>

              <h2 className='text-2xl font-semibold lg:text-[29px]'>Electrical & Plumbing Repairs</h2>
              <p className='text-base font-medium'>Small electrical fixes and plumbing solutions.</p>

          </div>

          <div className='flex flex-col gap-4 items-start'>
            <div className='relative'>
              <div className='w-10 h-10 bg-[#DA2327] p-2 text-white text-base font-semibold rounded-full text-center absolute top-0 left-2'> 6</div>

               <div className=" bg-[url('/assets/icons/cd5f571e9f491aa8b91603dc2460239892d4b902.gif')] w-16 h-16 bg-cover -mt-8 mx-8 " />
            </div>


              <h2 className='text-2xl font-semibold lg:text-[29px]'>Pressure Washing & Gutter Cleaning</h2>
              <p className='text-base font-medium'>Maintain your home’s exterior with ease.</p>

          </div>

          <div className='flex flex-col gap-4 items-start'>
            <div className='relative'>
              <div className='w-10 h-10 bg-[#DA2327] p-2 text-white text-base font-semibold rounded-full text-center absolute top-0 left-2'> 7</div>

               <div className=" bg-[url('/assets/icons/ffb37f89a000a2bc692d78077d71d47af4c81c0d.gif')] w-16 h-16 bg-cover -mt-8 mx-8 " />
            </div>

              <h2 className='text-2xl font-semibold lg:text-[29px]'>Carpentry & Custom Woodwork</h2>
              <p className='text-base font-medium '>Shelving, cabinets, trim work, and more.</p>

          </div>

          <div className='flex flex-col gap-4 items-start'>
            <div className=' relative'>
              <div className='w-10 h-10 bg-[#DA2327] p-2 text-white text-base font-semibold rounded-full text-center absolute top-0 left-2'> 8</div>

               <div className=" bg-[url('/assets/icons/855020ee3cb028c1226592a8b5a753782adb048c.gif')] w-16 h-16 bg-cover -mt-8 mx-8" />
            </div>

              <h2 className='text-2xl font-semibold lg:text-[29px]'>Lawn Maintenance</h2>
              <p className='text-base font-medium'>Spring and fall cleaning, trimming, planting, and junk hauling.</p>

          </div>

        </div>

    </section>

    <section className="lg:max-w-[1530px] lg:mx-auto">
      <div className=" flex flex-col items-center px-5 pt-18 gap-12 md:gap-16 md:px-6 md:pt-16 lg:gap-[64px] lg:px-20 lg:items-start lg:flex-row lg:pt-[200px] lg:w-full">
        <div className="h-[379px] self-stretch w-full pl-2 md:h-[731px] md:pl-3 lg:pl-0 lg:w">
          <div className="bg-[url('/assets/images/Group1.png')]  bg-no-repeat bg-cover bg-center aspect-square"/>
        </div>

        <div className="flex flex-col gap-6 self-stretch md:gap-10 lg:gap-10 lg:w-1/2">
            <div className='flex flex-col items-start gap-4 md:gap-6' id='About Us'>
              <h2 className='text-[#DA2327] text-[20px] font-semibold'> About Us</h2>

              <h2 className=' text-black text-4xl font-bold self-stretch md:text-[53px]'>“...We strive to enhance the comfort, safety, and value of your home.”</h2>
            </div>

            <p className="text-base font-normal">
              At JMG HandyMan Services, we take pride in delivering reliable, efficient, and high-quality handyman services to homeowners and businesses alike. No project is too big or too small—we tackle everything from minor repairs to full-scale renovations with the same level of dedication and excellence
            </p>


            <div className='flex flex-col items-start gap-6'>
              <h2 className='text-[#DA2327] text-[20px] font-semibold lg:text-sm'> Our Mission</h2>

              <p className="text-base font-normal ">
                We strive to enhance the comfort, safety, and value of your home by providing top-tier handyman services. Every project we complete is a reflection of our commitment to excellence, integrity, and customer satisfaction.
              </p>
            </div>

            <div className='flex flex-col items-start gap-6'>
              <h2 className='text-[#DA2327] text-[20px] font-semibold'> Our Vision</h2>

              <p className="text-base font-normal">
                We aim to be the #1 trusted handyman service in our community, recognized for our honesty, craftsmanship, and dedication to exceeding expectations. We believe every homeowner deserves stress-free, high-quality home repairs and improvements.
              </p>
            </div>
          </div>
      </div>
    </section>


    <section className="max-w-[1530px] lg:mx-auto">
        <div className='pt-18' id="Testimonials">
          <div className="w-full h-[395px] bg-no-repeat bg-cover bg-[url('/assets/images/Rectangle10.png')] px-5 pt-10 bg-center md:w-full md:pt-10 md:px-6 lg:px-20">
            <p className='text-center text-white text-4xl font-semibold md:text-[53px]'>High-quality Services. Happy Customers</p>
          </div>
        </div>

         <AutoScrollCards/>

        <div className="flex flex-col px-5 gap-12 items-center pt-18 md:px-6 md:gap-16 md:pt-40" id="FAQ">
          <h2 className="self-stretch font-semibold text-4xl md:text-[53px] text-center md:font-semibold">Frequently Asked Questions</h2>

            <AccordionMenu />

        </div>
        </section>

    <section className="lg:max-w-[1530px] lg:mx-auto">
        <div className='flex flex-col items-center  py-18 px-6 lg:px-20'>
          <div className=" bg-[linear-gradient(0deg,rgba(0,0,0,0)_23.43%,#000_80.8%),url('/assets/images/Frame64.png')] bg-cover bg-no-repeat bg-center w-full rounded  pb-11 pt-[35px] flex flex-col center gap-12 px-6 lg:w-full lg:h-[729px] lg:px-[87px] lg:py-[85px] lg:flex-row lg:gap-16 lg:bg-[linear-gradient(270deg,rgba(0,0,0,0)_23.43%,#000_73.8%),url('/assets/images/Frame64.png')] md:inline-flex md:pt-[58px] md:pl-[47px] md:pr-[46px] md:pb-[67px] md:flex-col md:items-center">

            <div className='flex flex-col items-start gap-4 self-stretch md:gap-6'>
                <h2 className="items-stretch text-[32px] font-semibold text-white md:text-[53px] md:self-stretch">Request a Free Quote & Get Your Repairs Started!</h2>

                <p className='text-white text-[16px] font-normal md:text-[18px] md:self-stretch'>Fill out the form to tell us what you need, and we’ll get back to you with a quick estimate. Fast, reliable, and hassle-free handyman <br />services—just one step away!</p>

                <p className='self-stretch text-white font-bold text-[16px] md:text-[18px]'>Or Call Us On 319-471-0593</p>

                <p className="text-[#CCC] self-stretch italic font-normal text-[14px] md:text-[16px]">Your home deserves the best—let’s make it happen!</p>
            </div>

              <FormPage/>

          </div>
        </div>
        </section>


        <footer className='bg-black'>
          <div className=' flex pt-16 px-5 pb-6 flex-col justify-center items-center gap-6 w-full md:pt-20 md:px-6 md:pb-10 md:gap-8 lg:px-20 lg:max-w-[1530px] lg:mx-auto'>
          <div className='flex flex-col items-center gap-12 self-stretch md:items-start md:gap-20 md:flex-row lg:flex-row lg:justify-between lg:gap-auto '>

            <div className='flex flex-col items-center gap-6 md:items-start md:w-[416px]'>
                <div className="bg-[url(/assets/logo/Bag2.jpg)] h-20 w-20 bg-cover bg-center lg:h-[64px] lg:w-[70px]" />
                <h2 className='text-white text-center text-[14px] font-normal  md:text-left md:text-[16px] '>At JMG HandyMan Services, we take pride in delivering reliable, efficient, and high-quality handyman services to homeowners and businesses alike. No project is too big or too small</h2>

                <div className='flex items-center gap-4'>
                  <div className='bg-[url(/assets/icons/facebook-02.svg)] h-8 w-8 bg-cover bg-center'/>
                  <div className='bg-[url(/assets/icons/instagram.svg)] h-8 w-8 bg-cover bg-center'/>
                  <div className='bg-[url(/assets/icons/tiktok.svg)] h-8 w-8 bg-cover bg-center'/>
                </div>
            </div>

            <div className='flex flex-col  items-center gap-6 text-white text-[14px] font-normal text-center md:gap-4 md:items-start md:text-left'>
              <h2 className='self-stretch text-lg text-[#666] font-semibold'>Quick Links</h2>
              <h3><a href="#Why Choose Us ">Why Choose Us</a></h3>
              <h3><a href="#Services">Services</a></h3>
              <h3><a href="#About Us">About Us</a></h3>
              <h3><a href="#Testimonials">Testimonials</a></h3>
            </div>

            <div className='flex flex-col items-center gap-6 text-[#FFFFFF] text-[14px] font-normal md:items-start md:text-left'>
              <h2 className='self-stretch text-lg text-[#666] font-semibold text-center md:text-left'>Contact Us</h2>
              <div className="flex flex-start gap-2 ">
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

            <hr className="h-[1px] w-full lg:max-w-[1530px] lg:mx-auto"/>

          <p className='text-center text-[#666] text-[14px] font-normal w-[335px] md:w-full'>Copyright, 2025 JMG HandyMan. All Rights Reserved</p>

          </div>
        </footer>

      </main>
    </>
  );
}
