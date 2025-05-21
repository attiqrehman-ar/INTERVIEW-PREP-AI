import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HERO_IMAGE from "../assets/hero-image.png";
import { APP_FEATURES } from "../utils/data";
import {LuSparkles} from "react-icons/lu"
import Login from "./Auth/Login";
import Modal from "../components/Modal";
function LandinPage() {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    // Add logic here (e.g., navigate to onboarding or dashboard)
    console.log("Get Started Clicked");
  };

  return (
    <>
 <div className="relative w-full min-h-screen bg-[#fffcef] overflow-hidden">
  {/* Blurred background shape */}
  <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0 -z-10" />

  {/* Page Container */}
  <div className="container mx-auto px-4 pt-6 pb-[200px] z-10">
    {/* Header */}
    <header className="flex justify-between items-center mb-22">
      <div className="text-xl font-bold text-black">Interview Prep AI</div>
      <button
        className="bg-gradient-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer"
        onClick={() => setOpenAuthModal(true)}
      >
        Login / Sign Up
      </button>
    </header>

    {/* Hero Section: Responsive Flexbox */}
    <section className="flex flex-col md:flex-row justify-between items-start gap-10">
      {/* Left Side: Headings */}
      <div className="w-full md:w-1/2">
      <p className="inline-flex items-center gap-2 px-4 py-1 text-sm font-semibold text-amber-800 bg-amber-100 border border-amber-600 rounded-full mb-4">
  <LuSparkles className="w-4 h-4" />
  AI Powered
</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-4">
          Ace Interviews with <br />
          <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
            AI-Powered
          </span>{" "}
          Learning
        </h1>
      </div>

      {/* Right Side: Description + CTA */}
      <div className="w-full md:w-1/2">
        <p className="text-gray-700 text-base sm:text-lg mb-6">
          Get role-specific questions, expand answers when you need them, dive
          deeper into concepts, and organize your way. From preparation to
          mastery – your ultimate interview toolkit is here.
        </p>
        <button
          className="bg-black text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
          onClick={handleCTA}
        >
          Get Started
        </button>
      </div>
    </section>
  </div>
</div>

<div className="w-full min-h-full z-10 relative">
<div>
  <section className="flex items-center justify-center -mt-36">
    <img className="w-[80vw] rounded-lg" src={HERO_IMAGE} alt="hero image" />
  </section>
</div>

<div className="w-full min-h-full mt-10 bg-[#fffcef]">
          <div className="mx-auto px-4 pt-10 container pb-20">
            <section className="mt-5">
              <h2 className="text-2xl font-medium text-center mb-12">
                Features that make you shine
              </h2>

              {/* First 3 Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {APP_FEATURES.slice(0, 3).map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100"
                  >
                    <h3 className="text-base font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Remaining Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-10">
                {APP_FEATURES.slice(3).map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100"
                  >
                    <h3 className="text-base font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        <div className="text-sm bg-grey-50 text-secondary text-center p-5 mt-5">
          Made with Heart ... Attiq
        </div>
      </div>

    <Modal
    isOpen={openAuthModal}
    onClose={()=>{
      setOpenAuthModal(false);
      setCurrentPage("login");
    }}
    hideHeader>
      <div>
{currentPage ==="login"&& (
  <Login setCurrentPage={setCurrentPage} />
)}
{currentPage ==="signup"&& (
  <Signup setCurrentPage={setCurrentPage} />
)}
      </div>
    </Modal>

    </>
  );
}

export default LandinPage;

