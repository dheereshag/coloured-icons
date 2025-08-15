interface ZoomOverlayProps {
  zoomedIcon: string | null;
}

const ZoomOverlay: React.FC<ZoomOverlayProps> = ({ zoomedIcon }) => {
  if (!zoomedIcon) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 transition-all pointer-events-none">
      <div className="p-8 bg-gray-300 rounded-xl shadow-xl sm:scale-150 scale-125 transition-transform">
        <i className={`ci ci-${zoomedIcon} ci-6x text-gray-800`} />
      </div>
    </div>
  );
};

export default ZoomOverlay;
