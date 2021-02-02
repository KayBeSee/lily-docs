import React, { useState, Fragment } from "react";
import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/router";
import Link from "next/link";

import Nav from "@/components/nav";
import Topbar from "@/components/Topbar";

const components = {
  a: Link,
};

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  return (
    <Fragment>
      <div class="bg-green-600">
        <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between flex-wrap">
            <div class="md:w-0 flex-1 flex items-center w-full">
              <span class="flex p-2 rounded-lg bg-yellow-300">
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </span>
              <p class="ml-3 font-medium text-white truncate">
                <span class="md:hidden">
                  We are testing the latest release of Lily.
                </span>
                <span class="hidden md:inline">
                  Big news! We're testing the latest release of Lily.
                </span>
              </p>
            </div>
            <div class="mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="https://docs.lily.kevinmulcrone.com/testing"
                class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-600 bg-white hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div
        className="flex overflow-hidden bg-gray-100"
        style={{ height: "calc(100vh - 56px)" }}
      >
        {/*}Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
        {router.pathname !== "/" && (
          <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        )}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <main
            className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
            tabIndex="0"
          >
            <div className="py-12">
              <div
                className={`${
                  router.pathname === "/" ? "max-w-7xl" : "max-w-4xl"
                } mx-auto px-4 sm:px-6 md:px-8`}
              >
                <MDXProvider components={components}>{children}</MDXProvider>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
