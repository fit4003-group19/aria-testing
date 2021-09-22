import { useState } from "react";
const useTestCases = () => {
  const [testCases, setTestCases] = useState([
    {
      description: "aria-labelledby, aria-describedby",
      url: `${process.env.PUBLIC_URL}/test_cases/0001.svg`,
      checked: false,
    },
    {
      description: "aria-label, aria-describedby",
      url: `${process.env.PUBLIC_URL}/test_cases/0002.svg`,
      checked: false,
    },
  ]);

  return { testCases, setTestCases };
};

export default useTestCases;
