"use client";

import { useCallback, useState } from "react";

import { useRouter } from "next/navigation";

import LoadingModal from "../../components/modals/LoadingModal";
import Users from "../[admin]/components/Users";
import Link from "next/link";


const AdminBox = () => {

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
            <div className="flex justify-spacebeetween items-center mb-1">
							<Link  className="text-lg font-medium text-gray-900 dark:text-gray-200" href={('/admin/users')}>Справочник пользователей</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBox;
