import { Transition } from "@headlessui/react";
import React from "react";
import { GrClose } from "react-icons/gr";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";

const RoundedWrapper = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={`relative rounded-t-3xl min-h-screen overflow-hidden flex flex-col ${
        !isOpen ? "bg-slate-50 shadow" : "bg-transparent shadow-none"
      }  rounded-b-3xl`}
    >
      <div className="md:hidden block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h-12 w-12 rounded-full absolute top-8 right-8 z-10 bg-white flex items-center justify-center"
        >
          {isOpen ? <GrClose /> : <HiMenu />}
        </button>

        <Transition
          className=""
          show={isOpen}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-75 "
        >
          <div className="font-hand flex items-center justify-center flex-col min-h-[97vh] w-full rounded-3xl bg-gradient-to-b from-fuchsia-900 to-violet-700 opacity-75 ">
            <Link passHref href={"/"}>
              <a
                onClick={() => setIsOpen(false)}
                className="text-white text-4xl mb-8 hover:font-semibold drop-shadow"
              >
                Home
              </a>
            </Link>
            <Link passHref href={"/location"} onClick={() => setIsOpen(false)}>
              <a
                onClick={() => setIsOpen(false)}
                className="text-white text-4xl mb-8 hover:font-semibold drop-shadow"
              >
                Location
              </a>
            </Link>
            <Link passHref href={"/rsvp"}>
              <a
                onClick={() => setIsOpen(false)}
                className="text-white text-4xl mb-8 hover:font-semibold drop-shadow"
              >
                RSVP
              </a>
            </Link>
            <Link passHref href={"/accommodation"}>
              <a
                onClick={() => setIsOpen(false)}
                className="text-white text-4xl mb-8 hover:font-semibold drop-shadow"
              >
                Accommodation
              </a>
            </Link>
            <Link passHref href={"/location"}>
              <a
                onClick={() => setIsOpen(false)}
                className="text-white text-4xl mb-8 hover:font-semibold drop-shadow"
              >
                Menu
              </a>
            </Link>
          </div>
        </Transition>
      </div>
      {!isOpen ? children : null}
    </div>
  );
};

export default RoundedWrapper;
