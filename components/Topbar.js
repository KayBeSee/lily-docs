import { Fragment } from "react";
import styled from "styled-components";
import Link from "next/link";

const Topbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="flex justify-between items-center p-3 bg-green-700 text-white border-b">
      <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
        <button
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}
          className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span className="sr-only">Open sidebar</span>
          {/*}Heroicon name: menu */}
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div className="flex">
        <Link href="/">
          <a className="flex">
            <img
              className="h-8 w-auto mr-2"
              src="/assets/logo.svg"
              alt="Lily Logo"
            />
            <span className="mt-1">
              Lily Wallet <span className="text-gray-300">Docs</span>
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

const Button = styled.button`
  padding: 0.5em 1em;
  background: #fff;
  color: #111828;
  border-radius: 0.385em;
`;

export default Topbar;
