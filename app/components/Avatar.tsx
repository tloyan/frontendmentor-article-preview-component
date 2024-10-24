import Image from "next/image";

export function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-10 overflow-hidden rounded-full">
      <Image src={src} alt={alt} width={40} height={40} />
    </div>
  );
}
