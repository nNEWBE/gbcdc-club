interface LogoProps {
  className?: string;
}
export default function Logo({
  className = "h-24 w-24 sm:h-28 sm:w-28",
}: LogoProps) {
  return (
    <div
      className={`relative transition-all duration-300 ${className} flex items-center justify-center`}
    >
      <img
        src="/GBCDC logo Icon.png"
        alt="GBCDC Logo"
        className="w-full h-full object-contain transition-all duration-300"
      />
    </div>
  );
}
