

function Navbar(){
  return(
    <div className="fixed top-0  bg-[#161616] w-full ">
      <div className="px-4 sm:px-6 md:px-10 lg:px-20">
      <ul className="flex flex-row justify-end space-x-4 h-15.5 items-center pr-4 ">
        { ["HOME", "ABOUT", "CONTACT", "WORKS", "PROJECTS"].map((item)=>(
          <li
          // KEY is a special prop in React used to identify each element in a list uniquely.
          key={item}
            className="relative cursor-pointer text-white hover:text-green-400 transition-colors duration-300"
            >
              {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>  
            </li>
        ))}



          {/* <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>WORKS </li>
          <li>PROJECTS</li> */}
        </ul>
    </div>
    </div>

  );

}
export default Navbar
