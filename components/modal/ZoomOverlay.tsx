interface ZoomOverlayProps {
  zoomedIcon: string | null;
}

export const ZoomOverlay: React.FC<ZoomOverlayProps> = ({ zoomedIcon }) => {
  if (!zoomedIcon) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="p-8 bg-gray-300 rounded-xl shadow-xl sm:scale-150 scale-125 transition-all duration-150 ease-out animate-in fade-in zoom-in-50">
        <i className={`ci ci-${zoomedIcon} ci-6x text-gray-800`} />
      </div>
    </div>
  );
};
