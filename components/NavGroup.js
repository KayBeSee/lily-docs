import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { TriangleDown } from '@styled-icons/octicons';

import NavItem from './NavItem';

const NavGroup = ({ page, pageChildren, router }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Fragment>
      <div onClick={() => setIsOpen(!isOpen)} className={`group cursor-pointer flex items-center justify-between px-2 py-4 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100`}>
        {page.module.meta.title}
        <Arrow style={{ transform: isOpen ? '' : 'rotate(-90deg)' }} className={'transform ease-in duration-100'} />
      </div>
      <div className="ml-2" style={{ display: isOpen ? 'block' : 'none' }}>
        {pageChildren.map((child) => <NavItem page={child} router={router} isParent={false} />)}
      </div>
    </Fragment>
  )
}

const Arrow = styled(TriangleDown)`
  width: 1em;
`


export default NavGroup