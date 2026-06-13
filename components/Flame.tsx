export default function Flame({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="flame"
    >
      <defs>
        <linearGradient id="forgeFlame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFA500" />
          <stop offset="55%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#FF4500" />
        </linearGradient>
      </defs>
      <path
        d="M12 2c1.2 3.1-.8 4.6-2 6.2-1.1 1.4-2 2.7-2 4.6a6 6 0 0 0 12 0c0-2.3-1.2-4-2.4-5.6.3 1.6-.4 2.7-1.2 3-.1-2.6-1.7-5.9-2.4-8.2Z"
        fill="url(#forgeFlame)"
      />
    </svg>
  );
}
