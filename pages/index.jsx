import { Fragment, useEffect } from "react";
import styled from "styled-components";
import {
  Rocket,
  Book,
  DesktopDownload,
  Gift,
  CodeReview,
} from "@styled-icons/octicons";

import Card from "../components/Card";

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
        className="h-20 w-auto mx-auto mt-4"
        src="/assets/logo.svg"
        alt="Lily Logo"
      />
      <div className="w-3/4 md:w-1/2 mt-5 mb-4 flex justify-center mx-auto">
        <h1 className="text-center">What can we help you find?</h1>
      </div>

      <div className="w-full sm:w-3/4 md:w-1/2 flex justify-center mx-auto mb-20">
        <input
          id="algolia-search"
          placeholder="Search for guides, terms, device names, and more..."
          className="p-3 border w-full rounded-md shadow-inner"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card
          image={
            <RocketIcon className="bg-green-100 rounded-full text-green-900" />
          }
          link="/overview"
          title="Get Started"
          content="Learn Lily basics and the benefits of multisig."
        />

        <Card
          image={
            <DesktopDownloadIcon className="bg-green-100 rounded-full text-green-900" />
          }
          link="/installation"
          title="Download and install"
          content="Download and install Lily on your machine in a few easy steps."
        />

        <Card
          image={
            <BookIcon className="bg-green-100 rounded-full text-green-900" />
          }
          link="/guides"
          title="Guides"
          content="Learn how to setup Lily and start securing your bitcoin."
        />

        <Card
          image={
            <GiftIcon className="bg-green-100 rounded-full text-green-900" />
          }
          link="/get-started"
          title="What's new?"
          content="Learn about cool new features, updates, and bug fixes."
        />

        <Card
          image={
            <CodeReviewIcon className="bg-green-100 rounded-full text-green-900" />
          }
          link="/get-started"
          title="Developers"
          content="Learn about how Lily works and how to integrate it with your hardware"
        />
      </div>
    </Fragment>
  );
}

const RocketIcon = styled(Rocket)`
  width: 4em;
  padding: 1em;
  border-radius: 1.25em;
`;

const BookIcon = styled(Book)`
  width: 4em;
  padding: 1em;
  border-radius: 1.25em;
`;

const DesktopDownloadIcon = styled(DesktopDownload)`
  width: 4em;
  padding: 1em;
  border-radius: 1.25em;
`;

const GiftIcon = styled(Gift)`
  width: 4em;
  padding: 1em;
  border-radius: 1.25em;
`;

const CodeReviewIcon = styled(CodeReview)`
  width: 4em;
  padding: 1em;
  border-radius: 1.25em;
`;
