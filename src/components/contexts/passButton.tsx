import { Button } from "../ui/button";

const passButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <main className="flex justify-center">
      <Button
      className="cursor-pointer p-5 w-120 h-15 text-2xl font-bold"
      onClick={onClick}
      >
        <p>Generate</p>
      </Button>
    </main>
  );
};

export default passButton;
