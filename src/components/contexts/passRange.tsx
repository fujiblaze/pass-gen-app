import { Slider } from "@/components/ui/slider";

const passRange = ({ length, setLength }: { length: number; setLength: React.Dispatch<React.SetStateAction<number>>}) => {

  return (
    <main className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2>Password Length</h2>
        <p>{length} characters</p>
      </div>
      <Slider
        defaultValue={[length]}
        min={4}
        max={32}
        step={1}
        onValueChange={(value) => setLength(value[0])}
      />
    </main>
  );
};

export default passRange;
