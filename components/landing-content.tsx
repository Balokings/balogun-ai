"use-client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonals = [
   {
      name: "Jegede",
      avatar: "J",
      title: "Data Analyst",
      description: "This is the best AI application I have ever used. Very efficient"
   },
   {
      name: "Victor Oboto",
      avatar: "V",
      title: "Web Developer",
      description: "This AI application is always a life saver when I debug my codes."
   },
   {
      name: "Eniola",
      avatar: "E",
      title: "Computer Scientist",
      description: "This application makes my work easier especially in data structures and algorithms"
   },
   {
      name: "Danjuma Waziri",
      avatar: "D",
      title: "Data Enginner",
      description: "This is the best AI application I have ever used. My projects are faster deliver"
   }
]

const LandingContent = () => {
   return ( 
      <div className="px-10 pb-20">
         <h1 className="text-center text-4xl text-white font-extrabold mb-10">
            Testimonials
         </h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {testimonals.map((item) => (
               <Card key={item.description} className="bg-[#192339] border-none text-white">
                  <CardHeader>
                     <CardTitle className="flex items-center gap-x-2">
                        <div>
                           <p className="text-lg">{item.name}</p>
                           <p className="text-sm text-zinc-400">{item.title}</p>
                        </div>
                     </CardTitle>
                     <CardContent className="pt-4 px-0">
                        {item.description}
                     </CardContent>
                  </CardHeader>
               </Card>
            ))}
         </div>
      </div>
    );
}

 
export default LandingContent;