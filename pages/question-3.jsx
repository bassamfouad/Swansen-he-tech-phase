import React from "react";
import Layout from "../components/Layout";

const question = () => {
  function fibonacciRecursive(num) {
    if (num < 2) {
      return num;
    }
    return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
  }

  function fibonacciIterattive(num) {
    const number = parseInt(prompt("Enter the number of terms: "));
    let n1 = 0,
      n2 = 1,
      nextTerm;
    console.log("Fibonacci Series:");
    for (let i = 1; i <= number; i++) {
      console.log(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    }
  }

  return (
    <Layout>
      <div className="flex align-middle items-center justify-center h-full">
        <p className="text-3xl text-center font-bold">
          For this Section i could not get creative enough to display on
          screen,but code is ready to be reviewed 🙏
        </p>
      </div>
    </Layout>
  );
};

export default question;
