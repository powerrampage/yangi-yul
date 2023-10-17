import React, {useState} from 'react';
import classes from './ServicesSection.module.scss';
import { motion } from "framer-motion";
let tabs = [
    { id: "Xizmatlar", label: "Xizmatlar" },
    { id: "Bo`limlar", label: "Bo`limlar" },
    { id: "Foydali havolalar", label: "Foydali havolalar" },
    { id: "Fotogalereya", label: "Fotogalereya" },
    { id: "Videogalereya", label: "Videogalereya" },
];


const ServicesSection = () => {
    let [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className={classes.services}>
           <div className={classes.tabs}>
               {tabs.map((tab) => (
                   <button
                       key={tab.id}
                       onClick={() => setActiveTab(tab.id)}
                       className={`${activeTab === tab.id ? "" : "hover:text-white/60"} ${classes.tab}`}
                       style={{
                           WebkitTapHighlightColor: "transparent",
                       }}
                   >
                       {activeTab === tab.id && (
                           <motion.span
                               layoutId="bubble"
                               className={classes.tab_content}
                               style={{ borderRadius: 9999 }}
                               transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                           />
                       )}
                       {tab.label}
                   </button>
               ))}
           </div>
        </div>
    );
};

export default ServicesSection;