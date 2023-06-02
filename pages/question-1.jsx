import React from "react";
import Layout from "../components/Layout";
const possibleApproaches = [
  {
    id: 0,
    title: "Using Addition, Subtraction, and disivsion",
    demo: "3+1/3+9",
  },
  // chatgpt was a waste of time after testing suggestions

  // { id: 1, title: "Using Division and Parentheses", demo: "3 / (1 - 3 / 9)" },
  // {
  //   id: 0,
  //   title: "Using Subtraction and Parentheses",
  //   demo: "3 - 1 * (3 - 9)",
  // },
  // {
  //   id: 0,
  //   title: "Using Multiplication and Parentheses",
  //   demo: "3 * (1 + 3 / 9)",
  // },
  // {
  //   id: 0,
  //   title: "Using Combination of Operators and Parentheses",
  //   demo: "3 * 1 + 3 * 9",
  // },
];
const question = () => {
  return (
    <Layout>
      <div className="container   mt-24">
        <div className="flex justify-center items-center h-full">
          <div className="p-24">
            <div className="">
              <div className="flex flex-col">
                <div className="flex flex-col gap-3">
                  <p className="font-bold">
                    {`Q1) Add arithmetic operators (add, subtract, multiply, divide) to make the
                    following expressions true. You can use any parentheses you’d like..
                    `}
                  </p>
                  <p>
                    <span>EX: </span>3 1 3 9 = 12
                  </p>
                </div>

                <div className="flex flex-col gap-2 mt-4 text-left">
                  {possibleApproaches?.map((approach) => (
                    <div key={approach.id} className="flex gap-4">
                      <p className="font-bold">{`${approach.title} :`} </p>
                      <p>{approach.demo} = 12</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Check again to create a pattern Rec for Examples  */}

        {/* <div className="max-w-sm mx-auto">
          <div className="w-full flex flex-col">
            <p>Try now</p>
            <div className="bg-[#ffff] w-full flex text-[#000] justify-between pr-6">
              <input className="" type="text" name="" id="" />
              <p>0</p>
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default question;
