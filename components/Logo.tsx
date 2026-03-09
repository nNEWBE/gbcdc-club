import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-24 w-24 sm:h-28 sm:w-28" }: LogoProps) {
  return (
    <div className={`relative transition-all duration-300 ${className} flex items-center justify-center`}>
      <Image
        src="/GBCDC logo Icon.png"
        alt="GBCDC Logo"
        fill
        className="object-contain transition-all duration-300 scale-[1.3] sm:scale-[1.5]"
        priority
      />
    </div>
  );
}
