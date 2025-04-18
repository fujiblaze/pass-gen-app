import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const passStrength = ({ data }: { data: string }) => {
  const password = data;

  /**
   * Evaluates the strength of a given password
   * @param {string} password The password to evaluate
   * @returns {number} A score indicating the strength of the password, with higher values indicating stronger passwords
   * This score is based on the following criteria:
   * - Length: Shorter passwords are given a lower score
   * - Character diversity: Passwords with a mix of lowercase, uppercase, digits, and special characters are given a higher score
   * - Presence of certain character types: Passwords with consecutive repeats are given a lower score
   * The score is calculated as follows:
   * - Length: -2 for < 8 characters, +1 for 8-11 characters, +2 for 12 or more characters
   * - Character diversity: +3 for all four character types, +2 for three character types, +1 for two character types
   * - Presence of certain character types: -1 for consecutive repeats
   */
  function evaluatePasswordStrength(password: string): number {
    let score = 0;

    // Length
    if (password.length < 8) {
      score -= 1;
    } else if (password.length < 12) {
      score += 1;
    } else {
      score += 2;
    }

    // Character diversity
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecial = /[^a-zA-Z0-9]/.test(password);

    if (hasLowercase && hasUppercase && hasDigit && hasSpecial) {
      score += 2;
    } else if (hasLowercase && hasUppercase && hasDigit) {
      score += 1;
    } else if (hasLowercase && hasUppercase) {
      score += 0;
    }

    // Presence of certain character types
    const hasConsecutiveRepeats = /(.)\1/.test(password);
    if (hasConsecutiveRepeats) {
      score -= 1;
    }

    return score;
  }

  const passScore = evaluatePasswordStrength(password);

  const color = (score: number) => {
    if (score <= 1) {
      return "text-red-600";
    } else if (score <= 2) {
      return "text-yellow-300";
    } else if (score <= 4) {
      return "text-green-600";
    } else {
      return "text-green-600";
    }
  };

  const strength = (score: number) => {
    if (score <= 1) {
      return "Weak";
    } else if (score <= 2) {
      return "Medium";
    } else if (score <= 4) {
      return "Strong";
    } else {
      return "Unknown";
    }
  };

  return (
    <main className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <p>Password Strength</p>
        <div className="border px-2 py-1 rounded-xl text-xs">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>?</TooltipTrigger>
              <TooltipContent className="text-md">
                <p>This score is based on the following criteria:</p>
                <p>- Length: Shorter passwords are given a lower score</p>
                <p>
                  - Character diversity: Passwords with a mix of lowercase,
                  uppercase, digits, and special characters are given a higher
                  score
                </p>
                <p>
                  - Presence of certain character types: Passwords with
                  consecutive repeats are given a lower score
                </p>

                <p>The score is calculated as follows:</p>
                <p>
                  {
                    "- Length: -2 for < 8 characters, +1 for 8-11 characters, +2 for 12 or more characters"
                  }
                </p>
                <p>
                  - Character diversity: +3 for all four character types, +2 for
                  three character types, +1 for two character types
                </p>
                <p>
                  - Presence of certain character types: -1 for consecutive
                  repeats
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <p className={color(passScore)}>{password && strength(passScore)}</p>
    </main>
  );
};

export default passStrength;
