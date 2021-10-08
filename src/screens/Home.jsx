import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillPhone } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { FiPhoneCall } from 'react-icons/fi';
export default function Home() {
  const handleEmailMe = () => {
    window.open('mailto:Vashsiya81@gmail.com');
  };

  return (
    <div className="bg-gray-200">
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0 s">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left shadow-2xl">
            <div className=" background-image: url('https://source.unsplash.com/MP0IUfwrn0A') block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>
            <h1 className="text-3xl font-bold pt-8 lg:pt-0 font-mono">Siyavash Torabi</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-green-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              <p className="font-mono">Software developer</p>
            </p>
            <p className=" font-mono pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-green-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>
              Austin Tx
            </p>
            <p className=" font-mono pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <FiPhoneCall size="15" className="text-green-900" />
              (737) 240-5023
            </p>

            <p className="pt-8 text-sm font-serif ">
              Resilient and tireless Junior Developer who enjoys thinking outside of the box to find
              creative and life-changing solutions. An effective leader, I rely on my exceptional
              multitasking abilities, communication skills, and resourcefulness to get the job done.
              When I’m not coding or helping my friends with their issue , you can find me putting
              toghather a new pc or upgrading the one i have
            </p>
            <div className="pt-12 pb-8 font-mono">
              <button
                onClick={handleEmailMe}
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
              >
                Get In Touch
              </button>
            </div>
            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              <a
                className="link"
                href="https://github.com/SiyavashTorabi/"
                data-tippy-content="@github_handle"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub size={30} />
              </a>
              <a
                onClick={handleEmailMe}
                className="link"
                href="https://www.linkedin.com/in/siyavash-torabi/"
                data-tippy-content="@unsplash_handle"
                target="_blank"
                rel="noreferrer"
              >
                <SiGmail size={30} />
              </a>
              
                <AiFillPhone size={30} />
              
              <a
                className="link"
                href="https://www.linkedin.com/in/siyavash-torabi/"
                data-tippy-content="@instagram_handle"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/12">
          <img
            src="siya.JPG"
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            alt="siyavash"
          />
        </div>
      </div>
    </div>
  );
}
