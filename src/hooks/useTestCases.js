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
    {
      description: "title tag",
      url: `${process.env.PUBLIC_URL}/test_cases/0003.svg`,
      checked: false,
    },
    {
      description: "desc tag",
      url: `${process.env.PUBLIC_URL}/test_cases/0004.svg`,
      checked: false,
    },
    {
      description: "text tag",
      url: `${process.env.PUBLIC_URL}/test_cases/0005.svg`,
      checked: false,
    },
    {
      description: "<title id=> tag",
      url: `${process.env.PUBLIC_URL}/test_cases/0006.svg`,
      checked: false,
    },
  ]);

  return { testCases, setTestCases };
};

export default useTestCases;
