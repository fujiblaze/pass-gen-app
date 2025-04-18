import { Checkbox } from "@/components/ui/checkbox";
import { OptionsData } from "../types/dataTypes";

const passOptions = ({
  optionsData,
  setOptionsData,
}: {
  optionsData: OptionsData[];
  setOptionsData: React.Dispatch<React.SetStateAction<OptionsData[]>>;
}) => {
  const handleChange = (index: number) => {
    const updatedOptions = [...optionsData];
    updatedOptions[index].state = !updatedOptions[index].state;
    setOptionsData(updatedOptions);
  };

  return (
    <main className="grid grid-cols-2 gap-5">
      {optionsData.map((option, index) => {
        return (
          <div key={option.title} className="flex items-center gap-3">
            {
              <Checkbox
                checked={option.state}
                className="cursor-pointer size-5"
                onCheckedChange={() => {
                  handleChange(index);
                }}
              />
            }
            <p>{option.title}</p>
          </div>
        );
      })}
    </main>
  );
};

export default passOptions;
