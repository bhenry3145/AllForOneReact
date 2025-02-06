import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Magic8BallFetch } from "../services/DataServices";

const Magic8BallComponent = () => {

    const [userInput, setUserInput] = useState('');
    const [display, setDisplay] = useState('');

    const fetchResponse = async () => {
        if(userInput == "")
        {
            setDisplay("Type Question below and Press Enter");
        }
        else
        {
            setDisplay(await Magic8BallFetch(userInput));
        }
    }

    useEffect(() => {
        fetchResponse();
    }, [])
    
    return (
        <>
        <div className='flex justify-center'>
            <h1 className='p-2 text-3xl'>Magic 8 Ball</h1>
        </div>
        
        <div className="grid grid-cols-1 grid-rows-4 min-h-screen mr-8 ml-8 md:mb-16 md:ml-16 md:mr-16 overflow-hidden bg-black md:grid-cols-[2fr_1fr] md:grid-rows-2 rounded-3xl">
            
                <div className="flex justify-center place-items-center">
                    <h1 className="flex h-32 p-2 text-xl bg-red-600 md:text-2xl place-items-center w-fit rounded-3xl">{display}</h1>     
                </div>
                
                <div className="flex justify-center place-items-center">
                    <NavLink to={'/'}>
                    <button className="h-32 text-4xl bg-red-600 w-36 rounded-3xl">Home</button>
                    </NavLink>
                </div>
                
                <div className="flex justify-center place-items-center">
                    <input onChange={(event) => setUserInput(event.target.value)} className="h-32 p-2 text-2xl bg-white md:text-3xl place-items-center w-fit rounded-3xl" placeholder="Question" type="text"/>
                </div>
                
                <div className="flex justify-center place-items-center">
                    <button onClick={fetchResponse} className="h-32 text-4xl bg-red-600 w-36 rounded-3xl">Enter</button>
                </div>
            
        </div>
        </>
    );
};

export default Magic8BallComponent;