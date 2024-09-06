"use client";

import { useState } from "react";
import SearchInput from "../../components/SearchInput";
import CalculatorBox from "./CalculatorBox";

// import SearchInput from "./SearchInput";



const CalculatorList = () => {
  const [searchBy, setSearchBy] = useState("");

  return (
    <aside
      className="
        fixed 
        inset-y-0 
        pb-20
        lg:pb-0
        lg:left-20 
        lg:w-80 
        lg:block
        overflow-y-auto 
        border-r 
        border-gray-200
        block w-full left-0
        dark:border-lightgray
      "
    >
      <div className="px-5">
        <div className="flex-col">
          <div
            className="
              text-2xl 
              font-bold 
              text-neutral-800 
              py-4
              dark:text-gray-200
            "
          >
            Калькуляторы
          </div>
        </div>
        <SearchInput
          id="search"
          placeholder="Поиск по названию"
          setSearchBy={setSearchBy}
        />
        {/* {items.filter(filterBySearch).map((item) => ( */}
        <CalculatorBox />
				{/* // key={item.id} data={item} /> */}
        {/* ))} */}
      </div>
    </aside>
  );
};

export default CalculatorList;
