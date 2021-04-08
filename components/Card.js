import Link from "next/link";

const Card = ({ title, image, content, link }) => {
  return (
    <Link href={link}>
      <a className="flex flex-row md:flex-col p-4 lg:p-6 shadow-md bg-white ease-in duration-200 transform scale-95 hover:scale-100 focus:bg-gray-100 focus:scale-95">
        <div className="bg-green-100 rounded-2xl text-green-900 p-1 flex align-center justify-center mr-6 w-min">
          {image}
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="m-0 mb-1 md:mt-4 lg:mt-6 lg:text-2xl md:text-xl sm:text-base text-base">
            {title}
          </h3>
          <p className="text-sm lg:text-lg m-0 leading-4 lg:leading-6">
            {content}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Card;
