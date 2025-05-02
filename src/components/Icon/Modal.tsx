const size = (icon: Icon, iconClass: string) => {
  // returns iconSize
  switch (true) {
    case iconClass.includes("horizontal"):
    case iconClass.includes("wordmark"):
      return 5;
    case iconClass.includes("vertical"):
      return 4;
    default:
      return 2;
  }
};

const Modal: React.FC<ModalProps> = ({ icon, onClose }) => {
  const [zoomedIcon, setZoomedIcon] = useState<string | null>(null);
  
  // Rest of the code remains the same
  
  // Update the usage in the JSX
  <i
    className={`ci ci-${iconClass} ci-${size(icon, iconClass)}x mx-3 py-auto cursor-pointer transition-all duration-200`}
    onMouseEnter={() => setZoomedIcon(iconClass)}
    onMouseLeave={() => setZoomedIcon(null)}
  />
