import Link from 'next/link'

const Card = ({ title, image, content, link }) => {
  return (
    <Link href={link}>
      <a className="p-6 shadow-md bg-white ease-in duration-200 transform scale-95 hover:scale-100 focus:bg-gray-100 focus:scale-95">
        {image}

        <h3 className="text-2xl mt-6">{title}</h3>
        <p>{content}</p>
      </a>
    </Link>
  )
}

export default Card;