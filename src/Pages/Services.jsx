import Navbar from '../Components/Layout/Navbar';
import ReactHelmet from '../Components/Layout/ReactHelmet';
import ServicesCard from '../Components/ServicesCard'
import useFetch from '../hooks/useFetch'

const Services = () => {
    const {data}=useFetch('services.json');

    console.log(data);
  return (
    <div className='container mx-auto'>

        <ReactHelmet pageName={'Sercices page'} />
        <Navbar />

        {/* services all */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5'>
              {data?.map((item)=> <ServicesCard key={item._id}  card={item} />)}
            </div>

    </div>
  )
}

export default Services