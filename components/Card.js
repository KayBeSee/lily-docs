import Link from "next/link";

const Card = ({ title, image, content, link }) => {
  return (
    <Link href={link}>
      <a className="flex flex-row md:flex-col p-4 lg:p-6 shadow-md bg-white ease-in duration-200 transform scale-95 hover:scale-100 focus:bg-gray-100 focus:scale-95">
        {image}
        <div className="flex flex-col justify-center">
          <h3 className="m-0 mb-1 md:mt-4 lg:mt-6 lg:text-2xl md:text-xl sm:text-base text-base">
            {title}
          </h3>
          {content}
        </div>
      </a>
    </Link>
  );
};

export default Card;
