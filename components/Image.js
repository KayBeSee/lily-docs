import Image from "next/image";

const ImageComponent = ({ src, alt }) => (
  <div className="rounded-md shadow-2xl overflow-hidden my-8 mx-2 md:mx-8 relative">
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      layout="responsive"
      objectFit={"cover"}
    />
  </div>
);

export default ImageComponent;
