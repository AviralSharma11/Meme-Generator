import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderHomepage from "./HeaderHomepage";
import "../Styles/Homepage.css";

function Homepage() {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    setShowVideo(true);
    setTimeout(() => {
      navigate("/loading");
    }, 1300);
  };

  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-center bg-cover flex items-center justify-center "
        style={{
          backgroundImage:
            "url('https://wallpapers.com/images/hd/meme-faces-black-and-white-25itfr6sfshhawly.jpg')",
          opacity: 0.35,
          zIndex: -1,
        }}
      > </div>
      <HeaderHomepage />
      <div className="w-screen flex items-center justify-center">
        <div className="flex flex-col bg-white opacity-95 p-4" style={{width:"700px"}}>
          <div className="flex justify-around items-center mb-4">
            <div className="mr-4">
              <img
                src="https://i.pinimg.com/564x/d5/c9/71/d5c971c7b33fd55e3198941a120f0a67.jpg"
                alt="Meme face 1"
                className="w-44 h-44 md:w-48 md:h-48"
              />
            </div>
            <div>
              <p className="text-lg font-bold font-irish">
                Yaha kuchh kuchh likhne ka socha h,<br /> abhi itna emmdiate nhi socha
                h.
              </p>
            </div>
          </div>

          <div className="mb-4 font-irish flex flex-row-reverse justify-between items-center">
            <div className="text-right">
              <img
                src="https://i.pinimg.com/564x/71/a1/e7/71a1e76b75910a507e9cdb276fb62628.jpg"
                alt="Meme face 2"
                className="w-44 h-44 md:w-48 md:h-48"
              />
            </div>
            <div>
              <p className="font-bold text-2xl text-left font-irish">HOW IT WORKS</p>
              <p className="text-left font-irish">
                Samjhne ka koi reason nhi, sab samajh jaoge.
                <br />
                MEMES: Is jahan se aageke ATM ki sab set ho jayega aage bado
              </p>
            </div>
          </div>

          <div className="mb-4 px-4">
            <p className="text-left font-irish pl-4">
              Internet ki galiyon mein, yeh meme hai failao (it)
              <br />
              Bake hain funny, par kuch samajh nahi aata (you)
            </p>
            <p className="text-right font-irish pr-4">
              Charon taraf share yeh dekh ke hasi aa jati (four) <br />
              Par kabhi kabhi soch mein padta yeh kya bakwaas hai be (but)
            </p>
            <p className="text-left font-irish pl-4">
              likha hua text, aur yeh funny si tasveer (written) <br />
              Saamaan kuch samajh nahi aata, yeh kaunsi hai taqdeer (understand)
            </p>
          </div>
          <div className="flex flex-row-reverse justify-between">
            <div>
              <p className="text-right font-irish pr-4">
                Lekin yeh chalte hain, yeh internet ka nasha (but)<br />Hasate
                hain, (cry) hain, yeh hai meme ka tamasha (drama)
              </p>
              <h4 className="text-right py-4 font-irish">~GEMINI (Google ki pauti)</h4>
            </div>

            <div className="mb-4 md:mb-0 md:order-1">
              <img
                src="https://i.pinimg.com/736x/f1/fd/e7/f1fde7eac3305de557a1e0b62f3eb943.jpg"
                alt="Meme face 3"
                className="w-44 h-44 md:w-48 md:h-48 float-left"
              />
            </div>
          </div>
          <div className="flex justify-end px-4">
            <button
              type="button"
              onClick={handleContinueClick}
              className="btn relative mb-6 w-48 h-12 bg-black text-white font-irish font-bold text-lg rounded-bl-xl rounded-tr-xl shadow-lg cursor-pointer transition-all duration-800 ease-in-out transform hover:shadow-none focus:outline-none"
            >
              Continue
            </button>
          </div>

          <div className="flex justify-center">
            <div className="text-center">
              <p>Udhaar lena apradh nhi h!</p>
              <img
                src="https://cdn.vectorstock.com/i/1000v/43/13/guy-meme-face-for-any-design-isolated-eps-vector-11464313.jpg"
                alt="Meme face 4"
                className="mx-auto"
                style={{ height: "20px" }}
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Homepage;
