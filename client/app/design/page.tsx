import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
    <Header />
    <div className='py-14'>
        
        <div className='py-14 text-center text-3xl'>
        <div className='justify-center flex text-center'>
            <div className='relative w-[7rem] h-[3px] bg-black text-center justify-center items-center'></div>
        </div>
            <h1 className=' p-8 min-[326px]:text-[1.5rem] lg:text-4xl md:text-4xl '>Interior Design Services</h1>
        </div>

        <div className=' lg:flex lg:justify-center m-auto max-w-2xl lg:py-8 min-[326px]:p-6'>
            <Image src='/design (3).jpg' width={200} height={10} alt='' className=' lg:w-[20rem] lg:h-[25rem] min-[326px]:w-[600px] min-[550px]:h-[500px] min-[754px]:w-[50rem] min-[754px]:h-[40rem]'/>
            <div className='bg-gray-300 h-[368px] min-[326px]:h-[400px]'>

                    <div className='px-14 lg:w-[50rem] lg:h-[550px] lg:overflow-hidden lg:leading-[2rem] relative top-10'>
                        <div className='relative w-[5rem] h-[2px] bg-black'></div>
                        <h2 className='lg:py-4 min-[326px]:py-4  text-3xl'>Personal Shopping</h2>
                        <p className=''>Specialising in high-end residential and hospitality interior design, <br /> our LuxDeco Studio team combines decades of experience to offer <br /> full-service interior design, renovation projects, home styling, <br /> interior architecture  and integrated smart design.</p>
                        <button className=' border-2 lg:p-4 lg:py-3 lg:px-10 lg:relative lg:top-8 min-[326px]:p-3 min-[326px]:relative min-[326px]: top-4'>VISIT FENISHA STUDIO</button>
                    </div>
            </div>   
        </div>

        <div className=' lg:flex lg:justify-center m-auto max-w-2xl lg:py-8 min-[326px]:p-6'>
            <div className='bg-gray-300 h-[368px] min-[326px]:h-[400px]'>

                    <div className='px-14 lg:w-[50rem] lg:h-[550px] lg:overflow-hidden lg:leading-[2rem] relative top-10'>
                        <div className='relative w-[5rem] h-[2px] bg-black'></div>
                        <h2 className='lg:py-4 min-[326px]:py-4  text-3xl'>E-design</h2>
                        <p className=''>Our entirely virtual e-design service offers easy and flexible design <br /> assistance for customers around the world. Our qualified interior designers <br /> curate tailored design schemes, rendered floor plans and personalised <br /> product suggestions to guide clients from the comfort of their own home.</p>
                        <button className=' border-2 lg:p-4 lg:py-3 lg:px-10 lg:relative lg:top-8 min-[326px]:p-3 min-[326px]:relative min-[326px]: top-4'>LEARN MORE</button>
                    </div>
            </div>   
            <Image src='/design (4).jpg' width={200} height={10} alt='' className=' lg:w-[20rem] lg:h-[25rem] min-[326px]:w-[600px] min-[550px]:h-[500px] min-[754px]:w-[50rem] min-[754px]:h-[40rem]'/>
        </div>

        <div className=' lg:flex lg:justify-center m-auto max-w-2xl lg:py-8 min-[326px]:p-6'>
            <Image src='/DESIGN.jpg' width={200} height={10} alt='' className=' lg:w-[20rem] lg:h-[25rem] min-[326px]:w-[600px] min-[550px]:h-[500px] min-[754px]:w-[50rem] min-[754px]:h-[40rem]'/>
            <div className='bg-gray-300 h-[368px] min-[326px]:h-[400px]'>

                    <div className='px-14 lg:w-[50rem] lg:h-[550px] lg:overflow-hidden lg:leading-[2rem] relative top-10'>
                        <div className='relative w-[5rem] h-[2px] bg-black'></div>
                        <h2 className='lg:py-4 min-[326px]:py-4 text-3xl'>Personal Shopping</h2>
                        <p className=''>For guidance on product selections and recommendations, our complimentary <br />personal shopping service is available to assist you throughout your shopping <br />  experience. Simply contact us with your enquiry and our team of qualified <br />  interior designers will provide product suggestions based on your requirements.</p>
                        <button className=' border-2 lg:p-4 lg:py-3 lg:px-10 lg:relative lg:top-8 min-[326px]:p-3 min-[326px]:relative min-[326px]: top-4'>CALL +225 05 03 53 29 67</button>
                    </div>
            </div>   
        </div>
        </div>
         <Footer />
    </div>
  )
}
