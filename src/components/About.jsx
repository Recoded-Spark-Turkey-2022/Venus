import React from 'react'
import AboutImg from '../assets/about-image.svg'

function About() {
  return (
    <div className='w-full my-32 ' > 
        <div className=' flex justify-center flex-col bg-lightBlue'>
            <div className='text-center flex-col'>
               <h2 className='text-4xl font-bold'>About</h2> 
               <p className='text-3xl py-3 text-gray-500'>In quo quaerimus, non emolumento aliquo, sed ipsius honestatis decore laudandis, id est et quas molestias excepturi sint, obcaecati cupiditate non numquam eius modi tempora incidunt, ut earum rerum hic tenetur a natura ipsa natura incorrupte atque integre iudicante itaque aiunt hanc quasi involuta aperiri.</p> 
            </div>
             <button className='bg-darkBlue text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3' >Learn more</button>
        </div>
        <div>
            <div className= 'grid grid-rows-2 columns-2 '>
                <div>
                    <div>
                        <h5>Reliability</h5>
                        <p>Certe, inquam, pertinax non recusandae itaque earum 	rerum facilis est consec. Laudem et impetus quo aut in gravissimo bello animadversionis.</p>
                    </div>
                    <div>
                        <h5>Motivation</h5>
                        <p>Certe, inquam, pertinax non recusandae itaque earum 	rerum facilis est consec. Laudem et impetus quo aut in gravissimo bello animadversionis.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h5>Efficiency</h5>
                        <p>Certe, inquam, pertinax non recusandae itaque earum 	rerum facilis est consec. Laudem et impetus quo aut in gravissimo bello animadversionis.</p>
                    </div> 
                    <div>
                        <h5>Creativity</h5>
                        <p>Certe, inquam, pertinax non recusandae itaque earum 	rerum facilis est consec. Laudem et impetus quo aut in gravissimo bello animadversionis.</p>
                    </div>
                </div>
            </div>
            <img  src={AboutImg} alt='/' />
        </div>
    </div>
  )
}

export default About