"use client";

import { useCallback, useState } from "react";

import { useRouter } from "next/navigation";

import LoadingModal from "../../components/modals/LoadingModal";
import Link from "next/link";


const CalculatorBox = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading && <LoadingModal />}
      <div
        className="
          w-full 
          relative 
          flex 
          items-center 
          space-x-3 
          p-3 
          hover:bg-neutral-100
          rounded-lg
          transition
          cursor-pointer
          dark:bg-dusk
          dark:hover:bg-lightgray
        "
      >
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <div className="flex justify-between items-center mb-1">
              <Link className="text-md font-medium text-gray-900 dark:text-gray-200" href={('/calculator/calcpage')}>МИ П.16-2021</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorBox;
