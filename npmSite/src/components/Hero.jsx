import Meimg from "../mePhoto/Myimg.png"
import "./hero.css"
import { Route,Routes,Link } from "react-router-dom"
import Calendarr from "./Calendar"

const Hero = () => {

    const handleClickScroll = () => {
        
        window.scrollTo({
            top: 700,
            left: 2500,
            behavior: "smooth",
    })}
       
      



    return (
        <div>
    <div className="mt-[3rem] ml-[3rem] flex flex-col items-center  justify-around  sm:flex-row sm:justify-evenly md:max-lg:mt-[10rem] md:max-lg:flex-col md:max-lg:ml-0">
        <div className="relative">
        <img src={Meimg} id="myImg" className="w-[10rem] rounded-full sm:w-[20rem]  bg-[#70f30ce8] md:max-lg:w-[15rem] " alt="" />
        <div  className="boxani w-[110px] h-[60px] bg-[#f1ff2a7e] absolute right-[-80px] top-[15px] rounded-md sm:top-[340px] sm:left-[280px] sm:w-[140px] sm:h-[80px] md:max-lg:left-[200px] md:max-lg:top-[150px]">

        <div  className="flex justify-center items-center h-[100%]">
            <div className="mr-5"><p className="font-bold text-[1.9rem] sm:text-[2rem]">8</p></div>
            <div><p className="sm:text-[1.2rem]">  Years of <br></br> exprince</p></div>
        </div>

        </div>

        <div className="boxani w-[140px] h-[60px] bg-[#f1ff2a7e] absolute right-[60px] bottom-[-50px] rounded-md sm:top-[-10px] sm:left-[-5rem] sm:w-[150px] sm:h-[70px] ">

        <div className="flex justify-center items-center h-[100%]">
        <div className="mr-5"><p className="font-bold text-[1.9rem] sm:text-[2rem]">34</p></div>
         <div>
            <p className="sm:text-[1rem]">Happy <br></br> Costumers</p></div>
        </div>

        </div>
        </div>
        <div className="flex flex-col ml-[0.8rem] sm:ml-0 mt-[10rem] sm:mt-0 md:max-lg:mt-[3rem]">
            <div><p className="text  underline text-[1.3rem]">Hello i am Nathan,  Web devolper /Designer</p></div>
            <div className="sm:w-[30rem] mt-[2rem] text-[1.8rem] font-extrabold"> <article className=" sa font-sans">Whether you need a professional website, I have the expertise and creativity to bring your vision to life. Let's work together to exceed your expectations and achieve your goals.</article>



            </div>
            <Link to="/Calendarr">
            <div onClick={handleClickScroll} className="self-center mt-[2rem] border-2 border-black py-3 px-5 bg-[#F31B0C] rounded-lg border-none font-serif cursor-pointer">
             <a className="text-[2rem] text-[#0CE4F3]"> Book a Call</a></div>
             </Link>
      
        
         
        </div>
        
            

    </div>



        <Routes>
            <Route path="/Calendarr" element={<Calendarr/>}></Route>
        </Routes>
    </div>
    )
}

export default Hero;