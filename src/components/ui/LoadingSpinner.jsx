export default function LoadingSpinner({ size = 14 }) {
  return (
    <div
      className="relative"
      style={{
        width: `${size * 4}px`,
        height: `${size * 4}px`,
      }}
    >
      <div
        className="absolute inset-0 animate-spin rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(93, 135, 255, 1) 0%, rgba(168, 85, 247, 0.8) 50%, rgba(236, 72, 153, 0) 100%)",
          maskImage: "radial-gradient(circle, rgba(0,0,0,0) 55%, rgba(0,0,0,1) 58%)",
          WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,0) 55%, rgba(0,0,0,1) 58%)",
        }}
      ></div>
    </div>
  );
}
