import React from "react";
import {useNavigate} from "react-router-dom";

function Homepage(){
    const navigate = useNavigate();

    const handleContinueClick = () => {
        navigate("/game");
    };        
            // Header

            return (
                <div className="bg-white p-4">
                    <div className="flex justify-center mb-4">
                        <div className="mr-4">
                            <img src="https://i.pinimg.com/564x/d5/c9/71/d5c971c7b33fd55e3198941a120f0a67.jpg" alt="Meme face 1" className="" style={{height:"136px", width:"132px"}}/>
                        </div>
                        <div>
                            <p className="text-lg font-bold">Yaha kuchh kuchh likhne ka socha h, abhi itna emmdiate nhi socha h.</p>
                        </div>
                    </div>
        
                    <div className="text-center mb-4">
                        <img src="https://i.pinimg.com/564x/71/a1/e7/71a1e76b75910a507e9cdb276fb62628.jpg" alt="Meme face 2" className="w-615px h-682px inline-block"/>
                        <p className="font-bold text-2xl">HOW IT WORKS</p>
                        <p>Samjhne ka koi reason nhi, sab samajh jaoge.<br/>MEMES: Is jahan se aageke ATM ki sab set ho jayega aage bado</p>
                    </div>
        
                    <div className="mb-4">
                        <p>Internet ki duniya men, apni meme hai bhai<br/>Bde kam krega agar sahi samjh skte ho kuchh 😎</p>
                        <p>Udhaar lena and adjust hote h.</p>
                        <p><i>Contact us:</i><br/>Thikaan toh hamesha bdi nhi hoti kam, tumko kaise se battade</p>
                    </div>
        
                    <div className="flex justify-center mb-4">
                        <div className="mr-4">
                            <img src="https://i.pinimg.com/736x/f1/fd/e7/f1fde7eac3305de557a1e0b62f3eb943.jpg" alt="Meme face 3" className="w-259px h-357px bg-white"/>
                        </div>
                        <div className="text-center">
                            <p className="text-lg">Let's create memes now</p>
                        </div>
                    </div>
        
                    <div className="flex justify-center">
                        <div className="text-center">
                            <p>Udhaar lena apradh nhi h!</p>
                            <img src="https://cdn.vectorstock.com/i/1000v/43/13/guy-meme-face-for-any-design-isolated-eps-vector-11464313.jpg" alt="Meme face 4" className="w-598px h-675px mx-auto"/>
                        </div>
                    </div>
                </div>
            );
        }
export default Homepage;