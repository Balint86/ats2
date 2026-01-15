import Link from "next/link";
import Image from "next/image";

export default function OverlayCard({
  href,
  imgSrc,
  imgAlt,
  title,
  text,
}: {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  text: string;
}) {
  return (
    <Link href={href} className="overlayCard">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={1200}
        height={900}
        className="overlayImg"
        priority={false}
      />
      <div className="overlayShade">
        <h3 className="overlayTitle">{title}</h3>
        <p className="overlayText">{text}</p>
      </div>
    </Link>
  );
}
