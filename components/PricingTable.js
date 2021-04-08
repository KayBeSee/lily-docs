import Link from "next/link";

const PricingTable = () => {
  return (
    <div class="max-w-2xl mx-auto bg-white mt-8 rounded-lg py-4 sm:py-8 sm:px-0 lg:max-w-7xl lg:px-0">
      <div class="space-y-24 lg:hidden">
        <div>
          <div class="px-4">
            <h2 class="text-lg leading-6 font-medium text-gray-900">Free</h2>
            <p class="mt-4">
              <span class="text-4xl sm:text-3xl font-extrabold text-gray-900">
                $0
              </span>
              <span class="text-base font-medium text-gray-500">/year</span>
            </p>
            <Link href="/installation">
              <a class="mt-6 block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">
                Download Lily
              </a>
            </Link>
          </div>

          <table class="mt-8 w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
              Features
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">
                  Feature
                </th>
                <th class="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Single Signature Hardware Wallets
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  2-of-3 Multisig Vaults
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">No</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  3-of-5 Multisig Vaults
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
              Network
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">
                  Feature
                </th>
                <th class="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Connect to Bitcoin Core
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">No</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Tor Support
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
              Support
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">
                  Feature
                </th>
                <th class="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Email Support
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">No</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Phone / Zoom Support
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="border-t border-gray-200 px-4 pt-5">
            <Link href="/installation">
              <a class="block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">
                Download Lily
              </a>
            </Link>
          </div>
        </div>

        <div>
          <div class="px-4">
            <h2 class="text-lg leading-6 font-medium text-gray-900">Basic</h2>
            <p class="mt-4">
              <span class="text-4xl sm:text-3xl font-extrabold text-gray-900">
                $100
              </span>
              <span class="text-base font-medium text-gray-500">/year</span>
            </p>
            <Link href="/installation">
              <a class="mt-6 block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">
                Purchase In-App
              </a>
            </Link>
          </div>

          <table class="mt-8 w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
              Features
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">
                  Feature
                </th>
                <th class="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Single Signature Hardware Wallets
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  2-of-3 Multisig Vaults
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  3-of-5 Multisig Vaults
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
              Network
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">
                  Feature
                </th>
                <th class="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Connect to Bitcoin Core
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Tor Support
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
              Support
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">
                  Feature
                </th>
                <th class="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Email Support
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Phone / Zoom Support
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="border-t border-gray-200 px-4 pt-5">
            <Link href="/installation">
              <a class="block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">
                Purchase In-App
              </a>
            </Link>
          </div>
        </div>

        <div>
          <div class="px-4">
            <h2 class="text-lg leading-6 font-medium text-gray-900">
              Essential
            </h2>
            <p class="mt-4">
              <span class="text-4xl sm:text-3xl font-extrabold text-gray-900">
                $500
              </span>
              <span class="text-base font-medium text-gray-500">/year</span>
            </p>
            <Link href="/installation">
              <a class="mt-6 block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">
                Purchase In-App
              </a>
            </Link>
          </div>

          <table class="mt-8 w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
              Features
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">
                  Feature
                </th>
                <th class="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Single Signature Hardware Wallets
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  2-of-3 Multisig Vaults
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  3-of-5 Multisig Vaults
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
              Network
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">
                  Feature
                </th>
                <th class="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Connect to Bitcoin Core
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Tor Support
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
              Support
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">
                  Feature
                </th>
                <th class="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Email Support
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Phone / Zoom Support
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="border-t border-gray-200 px-4 pt-5">
            <Link href="/installation">
              <a class="block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">
                Purchase In-App
              </a>
            </Link>
          </div>
        </div>

        <div>
          <div class="px-4">
            <h2 class="text-lg leading-6 font-medium text-gray-900">Premium</h2>
            <p class="mt-4">
              <span class="text-4xl sm:text-3xl font-extrabold text-gray-900">
                $1000
              </span>
              <span class="text-base font-medium text-gray-500">/year</span>
            </p>
            <Link href="/installation">
              <a class="mt-6 block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">
                Purchase In-App
              </a>
            </Link>
          </div>

          <table class="mt-8 w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
              Features
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">
                  Feature
                </th>
                <th class="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Single Signature Hardware Wallets
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  2-of-3 Multisig Vaults
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  3-of-5 Multisig Vaults
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
              Network
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">
                  Feature
                </th>
                <th class="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Connect to Bitcoin Core
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Tor Support
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
              Support
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">
                  Feature
                </th>
                <th class="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Email Support
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Phone / Zoom Support
                </th>
                <td class="py-5 pr-4">
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="border-t border-gray-200 px-4 pt-5">
            <Link href="/installation">
              <a class="block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">
                Purchase In-App
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div class="hidden lg:block">
        <table class="w-full h-px table-fixed">
          <caption class="sr-only">Pricing plan comparison</caption>
          <thead>
            <tr>
              <th
                class="pb-4 pl-6 pr-6 text-sm font-medium text-gray-900 text-left"
                scope="col"
              >
                <span class="sr-only">Feature by</span>
                <span>Plans</span>
              </th>

              <th
                class="w-1/5 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                scope="col"
              >
                Free
              </th>

              <th
                class="w-1/5 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                scope="col"
              >
                Basic
              </th>

              <th
                class="w-1/5 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                scope="col"
              >
                Essential
              </th>

              <th
                class="w-1/5 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                scope="col"
              >
                Premium
              </th>
            </tr>
          </thead>
          <tbody class="border-t border-gray-200 divide-y divide-gray-200">
            <tr>
              <th
                class="py-8 pl-6 pr-6 align-top text-sm font-medium text-gray-900 text-left"
                scope="row"
              >
                Pricing
              </th>

              <td class="h-full py-8 px-6 align-top">
                <div class="h-full flex flex-col justify-between">
                  <div>
                    <p>
                      <span class="text-4xl sm:text-3xl font-extrabold text-gray-900">
                        $0
                      </span>
                      <span class="text-base font-medium text-gray-500">
                        /year
                      </span>
                    </p>
                  </div>
                  <Link href="/installation">
                    <a class="mt-6 block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-xs font-semibold text-white text-center hover:to-pink-600">
                      Download Lily
                    </a>
                  </Link>
                </div>
              </td>

              <td class="h-full py-8 px-6 align-top">
                <div class="h-full flex flex-col justify-between">
                  <div>
                    <p>
                      <span class="text-4xl sm:text-3xl font-extrabold text-gray-900">
                        $100
                      </span>
                      <span class="text-base font-medium text-gray-500">
                        /year
                      </span>
                    </p>
                  </div>
                  <Link href="/installation">
                    <a class="mt-6 block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-xs font-semibold text-white text-center hover:to-pink-600">
                      Purchase In-App
                    </a>
                  </Link>
                </div>
              </td>

              <td class="h-full py-8 px-6 align-top">
                <div class="h-full flex flex-col justify-between">
                  <div>
                    <p>
                      <span class="text-4xl sm:text-3xl font-extrabold text-gray-900">
                        $500
                      </span>
                      <span class="text-base font-medium text-gray-500">
                        /year
                      </span>
                    </p>
                  </div>
                  <Link href="/installation">
                    <a class="mt-6 block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-xs font-semibold text-white text-center hover:to-pink-600">
                      Purchase In-App
                    </a>
                  </Link>
                </div>
              </td>

              <td class="h-full py-8 px-6 align-top">
                <div class="h-full flex flex-col justify-between">
                  <div>
                    <p>
                      <span class="text-4xl sm:text-3xl font-extrabold text-gray-900">
                        $1000
                      </span>
                      <span class="text-base font-medium text-gray-500">
                        /year
                      </span>
                    </p>
                  </div>
                  <Link href="/installation">
                    <a class="mt-6 block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-xs font-semibold text-white text-center hover:to-pink-600">
                      Purchase In-App
                    </a>
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <th
                class="py-3 pl-6 bg-gray-50 text-sm font-medium text-gray-900 text-left"
                colspan="5"
                scope="colgroup"
              >
                Features
              </th>
            </tr>

            <tr>
              <th
                class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                scope="row"
              >
                Single Signature Hardware Wallets
              </th>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Free</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Basic</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Essential</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Premium</span>
              </td>
            </tr>

            <tr>
              <th
                class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                scope="row"
              >
                2-of-3 Multisig Vaults
              </th>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Basic</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Essential</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Premium</span>
              </td>
            </tr>

            <tr>
              <th
                class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                scope="row"
              >
                3-of-5 Multisig Vaults
              </th>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Not included in Basic</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Essential</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Premium</span>
              </td>
            </tr>
            <tr>
              <th
                class="py-3 pl-6 bg-gray-50 text-sm font-medium text-gray-900 text-left"
                colspan="5"
                scope="colgroup"
              >
                Network
              </th>
            </tr>

            <tr>
              <th
                class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                scope="row"
              >
                Connect to Bitcoin Core
              </th>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Basic</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Essential</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Premium</span>
              </td>
            </tr>

            <tr>
              <th
                class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                scope="row"
              >
                Tor Support
              </th>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Basic</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Essential</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Premium</span>
              </td>
            </tr>

            <tr>
              <th
                class="py-3 pl-6 bg-gray-50 text-sm font-medium text-gray-900 text-left"
                colspan="5"
                scope="colgroup"
              >
                Support
              </th>
            </tr>

            <tr>
              <th
                class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                scope="row"
              >
                Email Support
              </th>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Basic</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Essential</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Premium</span>
              </td>
            </tr>

            <tr>
              <th
                class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                scope="row"
              >
                Phone / Zoom Support
              </th>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Not included in Basic</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Not included in Essential</span>
              </td>
              <td class="py-5 px-6">
                <svg
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Included in Premium</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="border-t border-gray-200">
              <th class="sr-only" scope="row">
                Choose your plan
              </th>

              <td class="pt-5 px-6">
                <Link href="/installation">
                  <a class="block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-xs font-semibold text-white text-center hover:to-pink-600">
                    Download Lily
                  </a>
                </Link>
              </td>

              <td class="pt-5 px-6">
                <Link href="/installation">
                  <a class="block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-xs font-semibold text-white text-center hover:to-pink-600">
                    Purchase In-App
                  </a>
                </Link>
              </td>

              <td class="pt-5 px-6">
                <Link href="/installation">
                  <a class="block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-xs font-semibold text-white text-center hover:to-pink-600">
                    Purchase In-App
                  </a>
                </Link>
              </td>

              <td class="pt-5 px-6">
                <Link href="/installation">
                  <a class="block w-full bg-green-500 border border-transparent rounded-md shadow py-2 text-xs font-semibold text-white text-center hover:to-pink-600">
                    Purchase In-App
                  </a>
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;
