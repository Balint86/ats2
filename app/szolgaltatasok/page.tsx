import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <section className="servicesSection">
      <h1 className="servicesTitle">Szolgáltatások</h1>

      <div className="servicesGrid">
        {/* Megújuló */}
        <Link href="/szolgaltatasok/megujulo" className="serviceCard">
          <Image
            src="/megujulo.svg"
            alt="Megujulo"
            width={600}
            height={400}
            className="serviceImage"
          />
          <h2>Megújuló</h2>
          <p>
            Megújuló megoldások.
          </p>
        </Link>

        {/* Távközlés */}
        <Link href="/szolgaltatasok/tavkozles" className="serviceCard">
          <Image
            src="/tavkozles.svg"
            alt="Tavkozles"
            width={600}
            height={400}
            className="serviceImage"
          />
          <h2>Távközlés</h2>
          <p>
            Távközlési megoldások.
          </p>
        </Link>
      </div>
    </section>
  );
}
