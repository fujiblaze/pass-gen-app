import PassDisplay from "./components/contexts/passDisplay";
import PassRange from "./components/contexts/passRange";
import PassOptions from "./components/contexts/passOptions";
import PassStrength from "./components/contexts/passStrength";
import PassButton from "./components/contexts/passButton";

import { OptionsData } from "./components/types/dataTypes";
import createPassword from "./components/hooks/createPassword";

import { ThemeProvider } from "./components/themes/theme-provider";
import { Card } from "./components/ui/card";
import { useState } from "react";

import "./App.css";

function App() {
  const passOptionsData: OptionsData[] = [
    { title: "Uppercase", state: false },
    { title: "Lowercase", state: false },
    { title: "Numbers", state: false },
    { title: "Symbols", state: false },
  ];

  const [copied, setCopied] = useState(false);
  const [length, setLength] = useState(8);
  const [optionsData, setOptionsData] = useState(passOptionsData);
  const { password, error, generatePassword } = createPassword();

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="border pt-10 pb-5 px-10 rounded-4xl">
        {<h2 className="rainbow text-6xl text-center font-bold pb-10">Password Generator</h2>}
        <Card className="container p-6 text-xl">
          <header>
            {/* password display tab */}
            <PassDisplay
              password={password}
              onClick={handleCopy}
              text={copied ? "Copied" : "Copy"}
            />
          </header>
          <section className="flex flex-col gap-8">
            {/* password range */}
            <PassRange length={length} setLength={setLength} />

            {/* password generation options */}
            <PassOptions
              optionsData={optionsData}
              setOptionsData={setOptionsData}
            />

            {/* password strength */}
            <PassStrength data={password} />

            {/* error handling */}
            {error.length > 0 && <p className="text-red-600">{error}</p>}

            {/* password generation button */}
            <PassButton onClick={() => generatePassword(optionsData, length)} />
          </section>
        </Card>

        {/* footer */}
        <footer className="py-4">
          <div className="text-end text-gray-400 text-xl">
            <p>&copy; {new Date().getFullYear()} made by fujimori_</p>
          </div>
        </footer>
      </main>
    </ThemeProvider>
  );
}

export default App;
