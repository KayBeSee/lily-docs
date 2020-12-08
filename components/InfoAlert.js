import Link from 'next/link';

const Alert = ({ text, actionLink, actionText }) => {
  return (
    <div className="rounded-md bg-blue-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-blue-700 m-0">
            {text}
          </p>
          <p className="mt-3 text-sm m-0 md:mt-0 md:ml-6">
            <Link href={actionLink}>
              <a className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">{actionText} <span aria-hidden="true">&rarr;</span></a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Alert;