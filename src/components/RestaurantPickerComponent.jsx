import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { RestaurantPickerFetch } from "../services/DataServices";

const RestaurantPickerComponent = () => {
    const [userInput, setUserInput] = useState('');
    const [display, setDisplay] = useState('');

    const fetchResponse = async (category) => {
        setUserInput(category);
        const response = await RestaurantPickerFetch(category); 
        setDisplay(response);
    }

    useEffect(() => {
        fetchResponse();
    }, [])

    return (
        <>
        <div className='flex justify-center'>
            <h1 className='p-2 text-3xl'>Restaurant Picker</h1>
        </div>
        
        <div className="grid min-h-screen grid-cols-1 grid-rows-2 mx-8 overflow-hidden bg-black md:mb-16 md:ml-16 md:mr-16 rounded-3xl">
            
                <div className="flex justify-center place-items-center">
                    <h1 className="flex h-32 p-2 m-2 text-xl text-center bg-lime-400 md:text-2xl place-items-center w-fit rounded-3xl">{display}</h1>     
                </div>
                
                
                <div className="flex flex-col justify-self-center place-items-center">
                    
                    <div>
                    <button onClick={() => fetchResponse("Mexican")} className="w-24 h-20 m-2 text-xl bg-lime-400 md:text-4xl md:h-32 md:w-36 rounded-3xl">Mexican</button>
                    <button onClick={() => fetchResponse("Chinese")} className="w-24 h-20 m-2 text-xl bg-lime-400 md:text-4xl md:h-32 md:w-36 rounded-3xl">Chinese</button>
                    <button onClick={() => fetchResponse("Fast Food")} className="w-24 h-20 m-2 text-xl bg-lime-400 md:text-3xl md:h-32 md:w-36 rounded-3xl">Fast Food</button>
                    </div>
                    
                    <div>
                    <NavLink to={'/'}>
                    <button className="w-24 h-20 m-2 text-xl bg-lime-400 md:text-4xl md:h-32 md:w-36 rounded-3xl">Home</button>
                    </NavLink>
                        
                    </div>
                </div>
                

            
        </div>
        </>
        
    );
};

export default RestaurantPickerComponent;