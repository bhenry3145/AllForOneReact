import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MadlibFetch } from "../services/DataServices";

const MadlibComponent = () => {
    
    const [userInput, setUserInput] = useState('');
    const [userInput2, setUserInput2] = useState('');
    const [userInput3, setUserInput3] = useState('');
    const [userInput4, setUserInput4] = useState('');
    const [userInput5, setUserInput5] = useState('');
    const [userInput6, setUserInput6] = useState('');
    const [userInput7, setUserInput7] = useState('');
    const [userInput8, setUserInput8] = useState('');
    const [userInput9, setUserInput9] = useState('');
    const [userInput10, setUserInput10] = useState('');
    const [display, setDisplay] = useState('');

    const fetchResponse = async () => {
        if(userInput == "" || userInput2 == "" || userInput3 == "" || userInput4 == "" || userInput5 == "" || userInput6 == "" || userInput7 == "" || userInput8 == "" || userInput9 == "" || userInput10 == "")
        {
            setDisplay("Fill in each box and press Enter");
        }
        else
        {
            setDisplay(await MadlibFetch(userInput, userInput2, userInput3, userInput4, userInput5, userInput6, userInput7, userInput8, userInput9, userInput10));
        }
    }

    useEffect(() => {
        fetchResponse();
    }, [])

    return (
        <>
        <div className='flex justify-center'>
            <h1>Madlib</h1>
        </div>
        
        <div className="grid min-h-screen grid-cols-1 grid-rows-2 ml-8 mr-8 overflow-hidden bg-black md:mb-16 md:ml-16 md:mr-16 rounded-3xl">
            
                <div className="flex justify-center place-items-center">
                    <h1 className="flex p-2 m-2 overflow-scroll text-xl text-center bg-yellow-300 over md:text-2xl place-items-center w-fit rounded-3xl">{display}</h1>     
                </div>
                
                <div className="flex justify-center place-items-center">
                    <NavLink to={'/'}>
                    <button className="h-32 m-2 text-4xl bg-yellow-300 w-36 rounded-3xl">Home</button>
                    </NavLink>

                    <button onClick={fetchResponse} className="h-32 text-4xl bg-yellow-300 w-36 rounded-3xl">Enter</button>

                </div>
                
                <div className="grid grid-cols-1 mb-2 grid-rows-10 md:grid-rows-5 md:grid-cols-2 md:m-4 justify-row-center place-items-center">
                    <input onChange={(event) => setUserInput(event.target.value)} className="h-16 p-2 text-xl bg-white lg:h-32 md:text-3xl place-items-center w-fit md:w-[16rem] rounded-3xl" placeholder="Place" type="text"/>
                    <input onChange={(event) => setUserInput2(event.target.value)} className="h-16 p-2 text-xl bg-white lg:h-32 md:text-3xl place-items-center w-fit md:w-[16rem] rounded-3xl" placeholder="Adjective" type="text"/>
                    <input onChange={(event) => setUserInput3(event.target.value)} className="h-16 p-2 text-xl bg-white lg:h-32 md:text-3xl place-items-center w-fit md:w-[16rem] rounded-3xl" placeholder="Animal" type="text"/>
                    <input onChange={(event) => setUserInput4(event.target.value)} className="h-16 p-2 text-xl bg-white lg:h-32 md:text-3xl place-items-center w-fit md:w-[16rem] rounded-3xl" placeholder="Adverb" type="text"/>
                    <input onChange={(event) => setUserInput5(event.target.value)} className="h-16 p-2 text-xl bg-white lg:h-32 md:text-3xl place-items-center w-fit md:w-[16rem] rounded-3xl" placeholder="Verb (present tense)" type="text"/>
                    <input onChange={(event) => setUserInput6(event.target.value)} className="h-16 p-2 text-xl bg-white lg:h-32 md:text-3xl place-items-center w-fit md:w-[16rem] rounded-3xl" placeholder="Name" type="text"/>
                    <input onChange={(event) => setUserInput7(event.target.value)} className="h-16 p-2 text-xl bg-white lg:h-32 md:text-3xl place-items-center w-fit md:w-[16rem] rounded-3xl" placeholder="Amount" type="text"/>
                    <input onChange={(event) => setUserInput8(event.target.value)} className="h-16 p-2 text-xl bg-white lg:h-32 md:text-3xl place-items-center w-fit md:w-[16rem] rounded-3xl" placeholder="Item (plural)" type="text"/>
                    <input onChange={(event) => setUserInput9(event.target.value)} className="h-16 p-2 text-xl bg-white lg:h-32 md:text-3xl place-items-center w-fit md:w-[16rem] rounded-3xl" placeholder="Vehicle" type="text"/>
                    <input onChange={(event) => setUserInput10(event.target.value)} className="h-16 p-2 text-xl bg-white lg:h-32 md:text-3xl place-items-center w-fit md:w-[16rem] rounded-3xl" placeholder="Country" type="text"/>
                </div>
                
                
            
        </div>
        </>
        
    );
};

export default MadlibComponent;