import { Button } from "../ui/button";

const passDisplay = ({ password, onClick, text }: { password: string; onClick: () => void; text: string}) => {

  return (
    <div className="flex items-center justify-between gap-8">
      <div className="border p-3 rounded-xl w-[350px] h-12">
        <h2 className="overflow-hidden text-ellipsis whitespace-nowrap">
          {password}
        </h2>
      </div>
      <Button
      className="cursor-pointer p-5 w-24 h-12"
      onClick={onClick}
      >
        <p className="text-xl font-medium">{text}</p>
      </Button>
    </div>
  );
};

export default passDisplay;
