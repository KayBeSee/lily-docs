import styled from "styled-components";
import { StarFill } from "@styled-icons/octicons";

const DeviceInfo = ({
  image,
  name,
  companyName,
  recommended,
  purchaseUrl,
  learnMoreUrl,
}) => {
  console.log("image: ", image);
  return (
    <DeviceInfoContainer className="bg-white rounded-lg px-4 py-8 shadow-md mb-16">
      <div className="relative">
        <DeviceContent className="relative max-w-7xl mx-auto px-4 pt-0 pb-12 sm:px-6 lg:px-8 lg:py-16">
          <div class="md:mr-auto md:w-1/2">
            <h1 className="mb-1">{name}</h1>
            <h3 className="mt-0">by {companyName}</h3>
            {recommended ? (
              <div class="flex items-center">
                <StarIcon className="mr-2" /> Recommended Device
              </div>
            ) : null}

            <DeviceImage className="md:hidden md:flex h-48 md:absolute md:right-0 md:top-0 md:h-full md:w-1/2 m-12">
              <img
                className="object-scale-down h-full w-full"
                layout="fill"
                src={image}
              />
            </DeviceImage>

            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <div className="w-full md:w-auto inline-flex rounded-md shadow rounded-md text-white bg-green-600 hover:bg-green-700">
                <a
                  href={purchaseUrl}
                  className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-center"
                  target="_blank"
                >
                  Purchase
                </a>
              </div>
              <div className="w-full md:w-auto sm:ml-3 inline-flex rounded-md shadow rounded-md text-green-600 bg-white hover:bg-green-50">
                <a
                  href={learnMoreUrl}
                  className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-center whitespace-nowrap"
                  target="_blank"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </DeviceContent>
        <DeviceImage className="h-48 hidden md:flex md:absolute md:right-0 md:top-0 md:h-full md:w-1/2">
          <img
            className="object-scale-down h-full w-full"
            layout="fill"
            src={image}
          />
        </DeviceImage>
      </div>
    </DeviceInfoContainer>
  );
};

const StarIcon = styled(StarFill)`
  width: 1em;
`;

const DeviceInfoContainer = styled.div``;

const DeviceImage = styled.div``;

const DeviceContent = styled.div``;

export default DeviceInfo;
