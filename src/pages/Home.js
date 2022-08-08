import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Financial from '../components/Financial'
import Transactions from '../components/Transactions'
import Whatelse from '../components/Whatelse'
import Rewarding from '../components/Rewarding'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Financial />
      <Transactions />
      <Whatelse />
      <Rewarding />
      <Footer/>
    </div>
  )
}

export default Home