import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import Sidebar from './sidebar.jsx';
function App() {
  return(

    //Fragment = empty set ankle brackets
   <>
    <div className="flex">
    <Navbar/>
    <Header/>
    <Footer/>
    <Sidebar/>
    </div>
    </>
  );


}
export default App
