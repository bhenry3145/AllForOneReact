import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AddingNumbersFetch } from "../services/DataServices";

const AddingTwoNumbersComponent = () => {

    const [userInput, setUserInput] = useState('');
    const [userInput2, setUserInput2] = useState('');
    const [display, setDisplay] = useState('');

    const fetchResponse = async () => {
        if(userInput == "" || userInput2 == "")
        {
            setDisplay("Enter your first number in box 1 and second number in box 2 and press Enter");
        }
        else
        {
            setDisplay(await AddingNumbersFetch(userInput, userInput2));
        }
    }

    useEffect(() => {
        fetchResponse();
    }, [])

    return (
        <>
        <div className='flex justify-center'>
            <h1 className='p-2 text-3xl'>Adding Two Numbers</h1>
        </div>
        
        <div className="grid min-h-screen grid-cols-1 grid-rows-4 ml-8 mr-8 overflow-hidden bg-black md:mb-16 md:ml-16 md:mr-16 rounded-3xl">
            
                <div className="flex justify-center place-items-center">
                    <h1 className="flex h-32 p-2 m-2 text-xl text-center bg-purple-600 md:text-2xl place-items-center w-fit rounded-3xl">{display}</h1>     
                </div>
                
                <div className="flex justify-center place-items-center">
                    <NavLink to={'/'}>
                    <button className="h-32 text-4xl bg-purple-600 w-36 rounded-3xl">Home</button>
                    </NavLink>
                </div>
                
                <div className="flex flex-col justify-row-center place-items-center">
                    <input onChange={(event) => setUserInput(event.target.value)} className="h-32 p-2 text-2xl bg-white md:text-3xl place-items-center w-fit rounded-3xl" placeholder="Number 1" type="text"/>
                    <input onChange={(event) => setUserInput2(event.target.value)} className="h-32 p-2 text-2xl bg-white md:text-3xl place-items-center w-fit rounded-3xl" placeholder="Number 2" type="text"/>
                </div>
                
                <div className="flex justify-center place-items-center">
                    <button onClick={fetchResponse} className="h-32 text-4xl bg-purple-600 w-36 rounded-3xl">Enter</button>
                </div>
            
        </div>
        </>
        
    );
};

export default AddingTwoNumbersComponent;