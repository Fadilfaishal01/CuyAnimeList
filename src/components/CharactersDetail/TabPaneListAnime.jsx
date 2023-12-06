"use client"

import {
   Tabs,
   TabsHeader,
   TabsBody,
   Tab,
   TabPanel,
 } from "@material-tailwind/react";
import { useState } from "react";

const TabPaneListAnime = ({dataCharacterAnime}) => {
   const [tabActive, setTabActive] = useState('about')
   const handleActiveTab = (value) => {
      setTabActive(value);
   }

   const data = [
      {
         label: 'About',
         value: "about",
         desc: `${dataCharacterAnime.data.about}`,
      },
      {
         label: "React",
         value: "react",
         desc: `Because it's about motivating the doers. Because I'm here
         to follow my dreams and inspire other people to follow their dreams, too.`,
      },
   
      {
         label: "Vue",
         value: "vue",
         desc: `We're not always in the position that we want to be at.
         We're constantly growing. We're constantly making mistakes. We're
         constantly trying to express ourselves and actualize our dreams.`,
      },
   
      {
         label: "Angular",
         value: "angular",
         desc: `Because it's about motivating the doers. Because I'm here
         to follow my dreams and inspire other people to follow their dreams, too.`,
      },
   
      {
         label: "Svelte",
         value: "svelte",
         desc: `We're not always in the position that we want to be at.
         We're constantly growing. We're constantly making mistakes. We're
         constantly trying to express ourselves and actualize our dreams.`,
      },
   ];
      
   return (
      <Tabs id="custom-animation" value="about">
         <TabsHeader className="bg-color-primary rounded text-color-dark mb-2 transition-all">
            {data.map(({ label, value }) => (
               <Tab key={value} value={value} onClick={() => handleActiveTab(value)} className={tabActive == value ? 'bg-color-accent rounded' : ''}>
                  {label}
               </Tab>
            ))}
         </TabsHeader>
         <TabsBody
            className="bg-color-primary text-color-dark rounded h-full min-h-screen"
            animate={{
               initial: { y: 250 },
               mount: { y: 0 },
               unmount: { y: 250 },
            }}
            >
            {data.map(({ value, desc }) => (
               <TabPanel key={value} value={value}>
                  {desc}
               </TabPanel>
            ))}
         </TabsBody>
      </Tabs>
   )
}

export default TabPaneListAnime