import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'

function App() {
  return(

    //Fragment = empty set ankle brackets
   <>
     <Navbar/>
  <main>
     <Header/>

    <Sidebar/>
    <Footer/>
   </main>
 </>
  );


}
export default App
