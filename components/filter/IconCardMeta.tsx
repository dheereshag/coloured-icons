interface IconCardMetaProps {
  name: string;
  url: string;
}

export const IconCardMeta: React.FC<IconCardMetaProps> = ({ name, url }) => {
  return (
    <span className="flex flex-col gap-0.5 min-w-0">
      <h4 className="text-gray-800 font-semibold truncate text-sm">{name}</h4>
      <p className="text-gray-400 text-xs truncate">{url}</p>
    </span>
  );
};
