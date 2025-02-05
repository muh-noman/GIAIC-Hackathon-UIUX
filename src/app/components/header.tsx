import { Montserrat } from "next/font/google"
import { VscAccount } from "react-icons/vsc";
import { RiSearchLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const montserrat = Montserrat({ subsets: ['latin'] })
const Header = () => {
    return (
        <div className='h-[100px]'>
            <div className='h-[49px]  absolute ml-16 inset-y-7 flex'>
                {/* logo and text */}
                <div className='flex'>
                    <img src="/assets/logo.png" alt="logo" width={50} height={32} />
                    <h1 className={`${montserrat.className} font-bold text-[34px]`}>Furniro</h1>
                    {/* list */}
                    <ul className="w-[430px] h-[24px] flex justify-evenly ml-[250px] self-center font-bold text-[16px]">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                {/* icons */}
                <div className="flex self-center ml-44 space-x-7 ">
                    <VscAccount className="h-[28px] w-[28px]" />
                    <RiSearchLine className="h-[28px] w-[28px]" />
                    <CiHeart className="h-[28px] w-[28px]" />
                    <IoCartOutline className="h-[28px] w-[28px]" />
                </div>
            </div>

        </div>
    )
}

export default Header
