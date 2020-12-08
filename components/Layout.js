import React, { useState, Fragment } from 'react';
import { MDXProvider } from '@mdx-js/react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Nav from '@/components/Nav'
import Topbar from '@/components/Topbar'

const components = {
  a: Link
}


const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  return (
    <Fragment>
      <Topbar setSidebarOpen={setSidebarOpen} />
      <div className="flex overflow-hidden bg-gray-100" style={{ height: 'calc(100vh - 56px)' }} >
        {/*}Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
        {router.pathname !== '/' && <Nav isOpen={sidebarOpen} setOpen={setSidebarOpen} />}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
            <div className="py-12">
              <div className={`${router.pathname === '/' ? 'max-w-7xl' : 'max-w-4xl'} mx-auto px-4 sm:px-6 md:px-8`}>
                <MDXProvider components={components}>
                  {children}
                </MDXProvider>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  )
}

export default Layout