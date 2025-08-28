
import ReactHelmet from '../Components/Layout/ReactHelmet'
import Navbar from '../Components/Layout/Navbar'
import Banner from '../Components/Banner'
import AboutHero from '../Components/AboutHero'
import useFetch from '../hooks/useFetch'
import ServicesCard from '../Components/ServicesCard'

const Home = () => {

    const { data, loading, error } =useFetch('services.json')



  return (
    <section>
      <ReactHelmet pageName={'Home Page'} />

      {/* this is Navbar */}
      <Navbar></Navbar>

      {/* this is banner section */}

      <Banner />

      {/* this is about page */}

      {/* About hero section */}
      <AboutHero />


      {/* services section */}

      <section className='container mx-auto'>
        <p className='text-[#FF3811] text-[20px] font-inter text-center'>Service</p>
        <h1 className='text-[45px] font-inter font-bold text-center'>Our Service Area</h1>
        <p className='text-[20px] font-inter text-center'>the majority have suffered alteration in some form,
            by injected humour, or randomised words which don't look even slightly believable. </p>



            {/* services card area */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5'>
              {data?.map((item)=> <ServicesCard key={item._id}  card={item} />)}
            </div>
      </section>


    </section>
      
  )
}

export default Home