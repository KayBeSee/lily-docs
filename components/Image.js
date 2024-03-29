import Image from "next/image";

const ImageComponent = ({ src, alt }) => (
  <div className="rounded-md shadow-2xl overflow-hidden my-8 mx-2 md:mx-8 relative">
    <img src={src} alt={alt} width="100%" layout="responsive" />
  </div>
);

export default ImageComponent;
