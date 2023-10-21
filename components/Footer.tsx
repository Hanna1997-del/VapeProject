import { BsFacebook, BsInstagram, BsLinkedin, BsQrCode, BsTwitter } from "react-icons/bs";

interface FooterProps {
    
}


 
const Footer: React.FC<FooterProps> = () => {
    return ( 
        <footer className="w-full md:w-[1110px] grid grid-cols-1 md:grid-cols-4 px-5 pb-5 text-center md:text-start">
            <div className="w-full flex flex-col gap-3">
                <h5 className="font-semibold text-lg mb-2">Customer Service</h5>
                <p className="text-md">Terms & Privacy Policy</p>
                <p className="text-md">Return Policy</p>
                <div className="pt-5 mb-5 md:mb-0">
                    <h5 className="text-lg font-semibold">Payment</h5>
                    <div className="flex w-full justify-center md:justify-start gap-2">
                        <div className="w-[5rem] aspect-[60/35] bg-[#0054A6] overflow-hidden flex justify-center items-center rounded">
                            <img src="/images/kbz-pay.png" alt="kbz-pay"/>
                        </div>
                        <div className="w-[5rem] aspect-[60/35] bg-[#0054A6] overflow-hidden flex justify-center items-center rounded">
                            <img src="/images/wavemoney.jpg" alt="kbz-pay"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-3">
                <h5 className="font-semibold text-lg mb-2">Language</h5>
                <div className="text-md flex gap-2 justify-center md:justify-start items-center">
                    <div className="w-[15px] h-[15px] bg-gray-300 rounded-full"></div>
                    Myanmar (Unicode)
                </div>
                <div className="text-md flex gap-2 justify-center md:justify-start items-center">
                    <div className="w-[15px] h-[15px] bg-gray-300 rounded-full"></div> 
                    Myanmar (Zawgyi)
                </div>
                <div className="text-md flex gap-2 justify-center md:justify-start items-center"> 
                    <div className="w-[15px] h-[15px] bg-blue-300 rounded-full"></div>
                    English
                </div>
                <div className="pt-5 mb-5 md:mb-0">
                    <h5 className="text-lg font-semibold mb-2">Follow Us On</h5>
                    <div className="flex justify-center md:justify-start gap-3 text-3xl">
                        <BsFacebook/>
                        <BsInstagram/>
                        <BsTwitter/>
                        <BsLinkedin/>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-3 mb-5 md:mb-0">
                <h5 className="font-semibold text-lg mb-2">Contact Us</h5>
                <p className="text-md">
                    {"Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana, Thingangyun Tsp, Yangon"}
                </p>
                <p className="text-md">
                    09458489458
                </p>
            </div>
            <div className="w-full flex flex-col items-center gap-3">
                <h5 className="font-semibold text-lg mb-2">Download Our App</h5>
                <div className="text-[5rem]">
                    <BsQrCode/>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;