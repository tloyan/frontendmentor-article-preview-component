import Image from "next/image";

import iconFacebook from "@/public/icon-facebook.svg";
import iconTwitter from "@/public/icon-twitter.svg";
import iconPinterest from "@/public/icon-pinterest.svg";

export function PinterestIcon() {
  return <Icon src={iconPinterest} alt="pinterest icon" />;
}

export function TwitterIcon() {
  return <Icon src={iconTwitter} alt="twitter icon" />;
}

export function FacebookIcon() {
  return <Icon src={iconFacebook} alt="facebook icon" />;
}

export function Icon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-5 w-5 items-center justify-center">
      <Image src={src} alt={alt} />
    </div>
  );
}
