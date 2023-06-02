import React from "react";
import Layout from "../components/Layout";

const question = () => {
  const Sorting = () => {
    return (
      <div className="bg-[#000] p-4 rounded-lg">
        <p>{`const sortedStr1 = str1.toLowerCase().split("").sort().join("");`}</p>
        <p>{`const sortedStr2 = str2.toLowerCase().split("").sort().join(""); return`}</p>
        <p>
          <span className="text-[#e31744]">return</span>{" "}
          {` nsortedStr1 === sortedStr2;`}
        </p>
      </div>
    );
  };

  const CMapping = () => {
    return (
      <div className="bg-[#000] p-4 rounded-lg">
        <p>{`function areAnagrams(str1, str2) {`}</p>
        <p>{`  const charMap1 = buildCharMap(str1);`}</p>
        <p>{`    const charMap2 = buildCharMap(str2);`}</p>
        <p>{`      if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {`}</p>
        <p>{`      if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {`}</p>
        <p>
          <span className="text-[#e31744]">return</span> {`           false;`}
        </p>
        <p>{`          };`}</p>
        <p>{`  for (let char in charMap1) {`}</p>
        <p>{`      if (charMap1[char] !== charMap2[char]) {`}</p>
        <p>
          <span className="text-[#e31744]">return</span> {`             false;`}
        </p>
        <p>{`            }`}</p>
        <p>{`            }`}</p>
        <p>
          <span className="text-[#e31744]">return</span>{" "}
          {`
                       true;
                      
                      `}
        </p>
        <p>{`              function buildCharMap(str) {`}</p>
        <p>{`                const charMap = {};`}</p>
        <p>{`                  for (let char of str.toLowerCase()) {`}</p>
        <p>{`                      charMap[char] = charMap[char] + 1 || 1;`}</p>
        <p>{`                        }`}</p>
        <p>
          <span className="text-[#e31744]">return</span> {`  return charMap;`}
        </p>
        <p>{`  }`}</p>
      </div>
    );
  };

  const possibleApproaches = [
    { id: 0, title: "Using Sorting" },
    { id: 1, title: "Using Character Maps" },
  ];
  return (
    <Layout>
      <div className="container   mt-24 overflow-hidden ">
        <div className="flex justify-center items-center h-full">
          <div className="p-24">
            <div className="">
              <div className="flex flex-col">
                <div className="flex flex-col gap-3">
                  <p className="font-bold">
                    {`Write a function/method utilizing Java, Javascript, Objective-C or Swift to determine whether two strings are anagrams or not
                    `}
                  </p>
                  <p>
                    <span>EX: </span>examples of anagrams: debit card/bad
                    credit, punishment/nine thumps, etc.
                  </p>
                </div>
                <div className="flex flex-col gap-8 mt-4 text-left">
                  {possibleApproaches?.map((approach) => (
                    <div
                      key={approach.id}
                      className="flex flex-col gap-2 shadow bg-blend-darken p-6"
                    >
                      <p className="font-bold">{`${approach.title} :`} </p>
                      <div>
                        {approach.title === "Using Sorting" && <Sorting />}
                      </div>
                      <>
                        {approach.title === "Using Character Maps" && (
                          <CMapping />
                        )}
                      </>
                      <>
                        {approach.title === "Using Frequency Counters" && (
                          <CMapping />
                        )}
                      </>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default question;
