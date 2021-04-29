import { Fragment, useEffect } from "react";
import styled from "styled-components";
import {
  Rocket,
  Book,
  DesktopDownload,
  Gift,
  CodeReview,
  Key,
} from "@styled-icons/octicons";
import { Calculator } from "@styled-icons/boxicons-regular";

import Card from "@/components/Card";

export const meta = {
  title: "Welcome!",
};

export default function IndexPage() {
  useEffect(() => {
    if (window.docsearch) {
      window.docsearch({
        apiKey: "69974bfe8281c96f980a8e10f66d0566",
        indexName: "lilywallet",
        inputSelector: "#algolia-search",
        debug: true, // Set debug to true if you want to inspect the dropdown
      });
    }
  }, []);

  return (
    <Fragment>
      <img
        className="h-20 w-auto mx-auto mt-2 md:mt-4"
        src="/assets/logo.svg"
        alt="Lily Logo"
      />
      <div className="w-3/4 md:w-1/2 mt-2 mb-2 md:mt-5 md:mb-4 flex justify-center mx-auto">
        <h2 className="text-center">What can we help you find?</h2>
      </div>

      <div className="w-full sm:w-3/4 md:w-1/2 flex justify-center mx-auto mb-12 lg:mb-20">
        <input
          id="algolia-search"
          placeholder="Search for guides, terms, device names, and more..."
          className="p-3 border w-full rounded-md shadow-inner"
        />

        {/* <Search
          apiKey="69974bfe8281c96f980a8e10f66d0566"
          indexName="lilywallet"
        /> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card
          image={
            <div className="bg-green-100 rounded-2xl text-green-900 p-1 flex align-center justify-center mr-6 w-min"><RocketIcon /></div>}
          link="/get-started/part-1"
          title="Get Started"
          content={<p className="text-sm lg:text-lg m-0 leading-4 lg:leading-6">Learn Lily basics and the benefits of multisig.</p>}
        />

        <Card
          image={<div className="bg-green-100 rounded-2xl text-green-900 p-1 flex align-center justify-center mr-6 w-min"><DesktopDownloadIcon /></div>}
          link="/installation"
          title="Download and install"
          content={<p className="text-sm lg:text-lg m-0 leading-4 lg:leading-6">Download and install Lily on your machine in a few easy steps.</p>}
        />

        <Card
          image={<div className="bg-green-100 rounded-2xl text-green-900 p-1 flex align-center justify-center mr-6 w-min"><BookIcon /></div>}
          link="/overview"
          title="Guides"
          content={<p className="text-sm lg:text-lg m-0 leading-4 lg:leading-6">Learn how to setup Lily and start securing your bitcoin.</p>}
        />

        <Card
          image={<div className="bg-green-100 rounded-2xl text-green-900 p-1 flex align-center justify-center mr-6 w-min"><DeviceIcon /></div>}
          link="/devices"
          title="Supported Devices"
          content={<p className="text-sm lg:text-lg m-0 leading-4 lg:leading-6">See what devices are compatabile and recommended.</p>}
        />

        <Card
          image={<div className="bg-green-100 rounded-2xl text-green-900 p-1 flex align-center justify-center mr-6 w-min"><GiftIcon /></div>}
          link="https://github.com/Lily-Technologies/lily-wallet/releases"
          title="What's new?"
          content={<p className="text-sm lg:text-lg m-0 leading-4 lg:leading-6">Learn about cool new features, updates, and bug fixes.</p>}
        />

        <Card
          image={<div className="bg-green-100 rounded-2xl text-green-900 p-1 flex align-center justify-center mr-6 w-min"><CodeReviewIcon /></div>}
          link="https://github.com/Lily-Technologies/lily-wallet"
          title="Developers"
          content={<p className="text-sm lg:text-lg m-0 leading-4 lg:leading-6">Learn about how Lily works and how to integrate it with your hardware</p>}
        />
      </div>
    </Fragment>
  );
}

const RocketIcon = styled(Rocket)`
  width: 4em;
  height: 4em;
  padding: 1em;
  border-radius: 1.25em;
`;

const BookIcon = styled(Book)`
  width: 4em;
  height: 4em;
  padding: 1em;
  border-radius: 1.25em;
`;

const DesktopDownloadIcon = styled(DesktopDownload)`
  width: 4em;
  height: 4em;
  padding: 1em;
  border-radius: 1.25em;
`;

const GiftIcon = styled(Gift)`
  width: 4em;
  height: 4em;
  padding: 1em;
  border-radius: 1.25em;
`;

const CodeReviewIcon = styled(CodeReview)`
  width: 4em;
  height: 4em;
  padding: 1em;
  border-radius: 1.25em;
`;

const DeviceIcon = styled(Calculator)`
  width: 4em;
  height: 4em;
  padding: 1em;
  border-radius: 1.25em;
`;
