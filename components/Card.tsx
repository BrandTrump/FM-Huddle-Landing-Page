import Image from "next/image";

type CardProps = {
  src: string;
  title: string;
  info: string;
};

function Card({ src, title, info }: CardProps) {
  return (
    <>
      <div className="w-full h-full rounded-t-lg p-4">
        <Image
          src={src}
          alt="card image"
          width={500}
          height={200}
          style={{ maxWidth: "100%", height: "auto" }}
          className="w-full mx-auto p-4 md:p-6"
        />
      </div>

      <div className="text-center p-6 space-y-4 rounded-b-lg md:text-start md:px-24">
        <h2 className="font-semibold text-xl md:text-2xl">{title}</h2>
        <p className="md:text-lg">{info}</p>
      </div>
    </>
  );
}

export default Card;
