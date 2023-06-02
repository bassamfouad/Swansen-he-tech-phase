/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import QuestionFourTheory from "../components/QuestionFourTheory";
import SwitchSVG from "../components/icons/SwitchSVG";
import DropdownIconSVG from "../components/icons/DropdownIconSVG";
import DropDownCurn from "../components/DropDownCurn";

const question = ({ data }) => {
  const [desiredBase, setDesiredBase] = useState({
    key: "EUR",
    value: 1,
  });

  const [desiredCurr, setDesiredCurr] = useState({
    key: "AUD",
    value: 1.566015,
  });
  // just incase i exceed the bundle
  const localData = {
    success: true,
    status: true,
    timestamp: 1519296206,
    base: "EUR",
    date: "2023-06-01",
    rates: {
      AUD: 1.566015,
      CAD: 1.560132,
      CHF: 1.154727,
      CNY: 7.827874,
      GBP: 0.882047,
      JPY: 132.360679,
      USD: 1.23396,
    },
  };
  const calculateExchangeRate = () => {
    // Assume exchange rates are based on 1 unit of desiredBase currency
    // and desiredCurr.value represents the exchange rate of desiredBase to desiredCurr

    // Get the desiredBase value
    const baseValue = desiredBase.value;

    // Calculate the exchange rate based on desiredBase to desiredCurr
    const exchangeRate = 1 / desiredCurr.value;

    // Calculate the converted value of desiredBase to desiredCurr
    const convertedValue = baseValue * exchangeRate;

    // Update the desiredCurr.value with the calculated converted value
    setDesiredCurr({
      ...desiredCurr,
      value: convertedValue,
    });
  };

  const dataArrKeys = data?.rates
    ? Object.keys(data.rates)
    : Object.keys(localData.rates);

  const dataArrValues = data?.rates
    ? Object.values(data.rates)
    : Object.values(localData.rates);

  const RatesView = () => {
    return (
      <div className="border p-4 text-center">
        <table className="table-auto  ">
          <thead>
            <tr>
              <th>Currency</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {dataArrKeys.map((key, index) => (
              <tr key={key} className="mb-2">
                <td>{key}</td>
                <td>{dataArrValues[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  return (
    <Layout>
      <div className="flex flex-col">
        <QuestionFourTheory />
        <div className="w-auto flex justify-center items-baseline gap-14">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="">
              <RatesView />
            </div>
          </div>
          <div className="flex  gap-2 text-[#000]">
            <DropDownCurn
              dataArrKeys={dataArrKeys}
              dataArrValues={dataArrValues}
              desiredBase={desiredBase}
              desiredCurr={desiredCurr}
              setDesiredCurr={setDesiredCurr}
              setDesiredBase={setDesiredBase}
              calculateExchangeRate={calculateExchangeRate}
            />
            <DropDownCurn
              right
              dataArrKeys={dataArrKeys}
              dataArrValues={dataArrValues}
              desiredBase={desiredBase}
              desiredCurr={desiredCurr}
              setDesiredCurr={setDesiredCurr}
              setDesiredBase={setDesiredBase}
              calculateExchangeRate={calculateExchangeRate}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default question;

export async function getStaticProps() {
  try {
    const response = await axios.get(
      "http://data.fixer.io/api/latest?access_key=915872534bfcc886cbd7e77e0a7dd5b7"
    );

    if (response && response.data) {
      return {
        props: { data: response.data },
      };
    } else {
      console.error("Invalid response:", response);
      return {
        props: { data: null },
      };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { data: null },
    };
  }
}
