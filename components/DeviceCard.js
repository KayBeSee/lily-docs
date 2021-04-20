import Link from "next/link";

const Card = ({ title, image, content, link }) => {
  return (
    <Link href={link}>
      <a className="flex flex-col md:flex-col p-4 lg:p-6 shadow-md bg-white ease-in duration-200 transform scale-95 hover:scale-100 focus:bg-gray-100 focus:scale-95 rounded-lg">
        <div className="h-64 md:h-72 mb-8">
          <img src={image} className="object-scale-down h-full w-full" />
        </div>
        <div className="flex flex-col justify-center text-center">
          <h3 className="m-0 lg:text-2xl md:text-xl sm:text-base text-base">
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
