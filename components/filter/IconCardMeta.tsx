interface IconCardMetaProps {
  name: string;
  url: string;
}

export const IconCardMeta: React.FC<IconCardMetaProps> = ({ name, url }) => {
  return (
    <span className="flex flex-col gap-1">
      <h4 className="text-gray-800 font-semibold truncate text-sm max-w-[230px] sm:max-w-[150px]">
        {name}
      </h4>
      <p className="text-gray-400 text-xs truncate max-w-[150px]">{url}</p>
    </span>
  );
};
