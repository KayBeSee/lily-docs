import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { TriangleDown } from "@styled-icons/octicons";

import { isChild } from "../utils/navigation";

const NavItem = ({ page, router, isParent, setSidebarOpen }) => (
  <Link href={page.link} passHref>
    <a
      onClick={() => setSidebarOpen(false)}
      className={`group flex items-center justify-between px-2 py-4 text-sm font-medium ${
        isChild(page) && "ml-4"
      } ${
        isChild(page) &&
        router.pathname !== page.link &&
        "border-l border-green-700"
      } ${
        router.pathname === page.link
          ? "text-gray-900 bg-gray-100 border-l-4 border-green-700"
          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
      }`}
    >
      {page.module.meta.title}
      {isParent && <Arrow />}
    </a>
  </Link>
);

const Arrow = styled(TriangleDown)`
  width: 1em;
`;

export default NavItem;
