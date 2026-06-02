import './SkeletonCard.css';

interface SkeletonCardProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  count?: number;
}

export default function SkeletonCard({
  width = '100%',
  height = '200px',
  borderRadius = '16px',
  count = 1,
}: SkeletonCardProps) {
  const items = Array.from({ length: count }, (_, i) => i);

  return (
    <>
      {items.map(i => (
        <div
          key={i}
          className="skeleton-card"
          style={{ width, height, borderRadius }}
        />
      ))}
    </>
  );
}
