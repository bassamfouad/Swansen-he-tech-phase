import React, { useState } from "react";
import DropdownIconSVG from "./icons/DropdownIconSVG";

const DropDownCurn = ({
  dataArrKeys,
  dataArrValues,
  desiredBase,
  right,
  desiredCurr,
  setDesiredCurr,
  setDesiredBase,
  calculateExchangeRate,
}) => {
  const [showCurrancy, setShowCurrancy] = useState(false);

  const handleChangeClick = (i) => {
    if (!right) {
      setDesiredBase({
        key: dataArrKeys[i],
        value: dataArrValues[i],
      });
    } else {
      setDesiredCurr({
        key: dataArrKeys[i],
        value: dataArrValues[i],
      });
    }
    setShowCurrancy(false);
  };

  return (
    <div className="flex justify-between bg-[#f4f4f4] items-center pl-4">
      {!right ? (
        <input
          onChange={calculateExchangeRate}
          className="rounded-md p-2"
          type="number"
          min="1"
          step="any"
        />
      ) : (
        <input
          onChange={calculateExchangeRate}
          className="rounded-md p-2"
          type="number"
          min="1"
          step="any"
          disabled
          value={desiredCurr.value}
        />
      )}
      <div className=" cursor-pointer relative">
        <div
          className=" flex justify-center items-center h-full gap-2 w-14"
          onClick={() => {
            setShowCurrancy(!showCurrancy);
          }}
        >
          {right ? <p>{desiredCurr.key}</p> : <p>{desiredBase.key}</p>}
          <DropdownIconSVG />
        </div>
        {showCurrancy && (
          <div className="absolute right-0 top-[100%] bg-[#f4f4f4] w-full py-4">
            <div className="flex justify-center items-center ">
              <ul className="flex flex-col gap-2">
                {dataArrKeys?.map((key, i) => (
                  <li
                    className="hover:opacity-60"
                    key={key}
                    onClick={() => handleChangeClick(i)}
                  >
                    {key}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDownCurn;
