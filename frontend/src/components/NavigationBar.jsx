import React, { useState } from 'react'
import Logo from "./../assets/Logo.png"
import RightArrow from "./../assets/icons/rightArrow.svg"
import { motion } from "framer-motion"
import {
    LayoutDashboard,
    Clock3,
    BarChart2,
    ArrowRightLeft,
    HelpCircleIcon
} from "lucide-react"

const navLinks = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Activity",
        icon: Clock3,
    },
    {
        name: "Analytics",
        icon: BarChart2,
    },
    {
        name: "Transactions",
        icon: ArrowRightLeft,
    },
    {
        name: "Help Center",
        icon: HelpCircleIcon,
    },
]

const variants = {
    expanded: {width: "20%"},
    nonExpanded: {width: "5%"}
}

function NavigationBar() {
    const [activeNavIndex, setActiveNavIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <motion.div 
            animate = {isExpanded ? "expanded": "nonExpanded"}
            variants={variants}
            className={
                'py-12 flex flex-col border border-r-1 w-1/5 h-screen relative' + 
                (isExpanded ? " px-10": " px-4")
            }
        >
            <div className='logo-div flex space-x-3 items-center'>
                <img src= {Logo} />
                <span className={isExpanded ? "block": "hidden"}>Money Tracker</span>
            </div>

            <div 
                onClick={() => setIsExpanded(!isExpanded)} 
                className='w-5 h-5 bg-red-300 rounded-full absolute -right-[10.5px] top-14 flex items-center justify-center'
            >
                <img src= {RightArrow} className='w-[5px]' />
            </div>

            <div className='mt-10 flex flex-col space-y-8'>
                {navLinks.map((item, index) => (
                <div 
                    key = {index} 
                    className={
                        'flex space-x-3 p-2 rounded' + 
                        (activeNavIndex ===  index 
                            ? " bg-red-600 text-white font-semibold" 
                            : "")
                    }
                    onClick={() => setActiveNavIndex(index)}
                >
                    <item.icon />
                    <span className={isExpanded ? "block": "hidden"}>
                        {item?.name}
                    </span>
                </div>
            ))}
            </div>
        </motion.div>
    );
}

export default NavigationBar