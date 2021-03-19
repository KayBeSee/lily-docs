import { Fragment, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { TriangleDown } from "@styled-icons/octicons";

import NavGroup from "./NavGroup";
import NavItem from "./NavItem";
import { Transition } from "./Transition";
import { pages } from "../getAllPages";

import { isChild, isParent } from "../utils/navigation";

// const NavItem = ({ page, router, isParent }) => (
//   <Link href={page.link}>
//     <a className={`group flex items-center justify-between px-2 py-4 text-sm font-medium ${isChild(page) && 'ml-4'} ${isChild(page) && router.pathname !== page.link && 'border-l border-green-700'} ${router.pathname === page.link ? 'text-gray-900 bg-gray-100 border-l-8 border-green-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
//       {page.module.meta.title}
//       {isParent && <Arrow />}
//     </a>
//   </Link>
// )

const getChildren = (pages) => {
  const items = [];
  for (let i = 0; i < pages.length; i++) {
    const current = pages[i];
    if (!isChild(pages[i])) {
      return items;
    } else {
      items.push(current);
    }
  }
  return items;
};

const constructNav = (pages, router, setSidebarOpen) => {
  let index = 0;
  const items = [];
  pages.sort((a, b) => a.module.meta.order - b.module.meta.order);
  while (index < pages.length) {
    if (isParent(pages, index)) {
      const children = getChildren(pages.slice(index + 1, pages.length));
      items.push(
        <NavGroup
          key={index}
          page={pages[index]}
          pageChildren={children}
          router={router}
          active={pages[index].link === `/${router.pathname.split("/")[1]}`}
        />
      );
      index = index + children.length + 1;
    } else {
      items.push(
        <NavItem
          key={index}
          page={pages[index]}
          router={router}
          isParent={false}
          setSidebarOpen={setSidebarOpen}
        />
      );
      index = index + 1;
    }
  }
  return items;
};

export default function Nav({ sidebarOpen, setSidebarOpen }) {
  const router = useRouter();

  const nav = constructNav(pages, router, setSidebarOpen);

  return (
    <Fragment>
      <Transition
        show={sidebarOpen}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 z-10">
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>
      </Transition>
      <Transition
        show={sidebarOpen}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="md:hidden">
          <div className="fixed inset-0 flex z-40">
            <Fragment>
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                    <span className="sr-only">Close sidebar</span>
                    {/*}Heroicon name: x */}
                    <svg
                      className="h-6 w-6 text-white"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <nav className="mt-5 px-2 space-y-1">{nav}</nav>
                </div>
              </div>
              <div className="flex-shrink-0 w-14">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </Fragment>
          </div>
        </div>
      </Transition>

      {/*}Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/*}Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <nav className="flex-1 px-0 bg-white space-y-1">{nav}</nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

const Arrow = styled(TriangleDown)`
  width: 1em;
`;
