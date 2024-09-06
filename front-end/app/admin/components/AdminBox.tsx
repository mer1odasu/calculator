"use client";

import { useState } from "react";
import LoadingModal from "../../components/modals/LoadingModal";
import Link from "next/link";

const AdminBox = () => {
  const [isLoading, setIsLoading] = useState(false);
	
  return (
    <>
      {isLoading && <LoadingModal />}
      <div
        className="
          w-full 
          relative 
          flex 
          flex-col 
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
          <div 
            className="mb-2" // Отступ между ссылками
          >
            <Link
              className={`text-lg font-medium text-gray-900 dark:text-gray-200 `} 
              href="/admin/users"
            >
              Справочник пользователей
            </Link>
          </div>
          <div 
            className="mb-2" // Отступ между ссылками
          >
            <Link
              className={`text-lg font-medium text-gray-900 dark:text-gray-200`} 
              href="/admin/indicators"
            >
              Справочник индикаторов
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBox;
