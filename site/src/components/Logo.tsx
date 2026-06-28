interface LogoProps {
  variant?: "color" | "mono";
  size?: number;
  className?: string;
}

export default function Logo({
  variant = "color",
  size = 40,
  className = "",
}: LogoProps) {
  if (variant === "mono") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Lunara"
        className={className}
      >
        <path
          d="M 64 12 A 48 48 0 1 0 64 108 A 35 48 0 1 1 64 12 Z"
          fill="currentColor"
        />
        <path
          d="M 75 38 A 24 24 0 0 1 75 82"
          fill="none"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M 84 27 A 37 37 0 0 1 84 93"
          fill="none"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M 93 16 A 50 50 0 0 1 93 104"
          fill="none"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Lunara"
      className={className}
    >
      <path
        d="M 64 12 A 48 48 0 1 0 64 108 A 35 48 0 1 1 64 12 Z"
        fill="#7C3AED"
      />
      <path
        d="M 75 38 A 24 24 0 0 1 75 82"
        fill="none"
        stroke="#7C3AED"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M 84 27 A 37 37 0 0 1 84 93"
        fill="none"
        stroke="#7C3AED"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M 93 16 A 50 50 0 0 1 93 104"
        fill="none"
        stroke="#7C3AED"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
