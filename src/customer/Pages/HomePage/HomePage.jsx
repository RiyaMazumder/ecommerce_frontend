import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { Mens_kurta } from '../../Data/Mens_kurta';


const HomePage = () => {
    return (
        <div>
            <MainCarousel/>

            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel data={Mens_kurta} sectionName={"Men's Kurta"}/>
                <HomeSectionCarousel data={Mens_kurta} sectionName={"Men's Shoes"}/>
                <HomeSectionCarousel data={Mens_kurta} sectionName={"Men's Shirt"}/>
                <HomeSectionCarousel data={Mens_kurta} sectionName={"Women's Saree"}/>
                <HomeSectionCarousel data={Mens_kurta} sectionName={"Women's Dress"}/>
                
            </div>
        </div>
    )
}

export default HomePage