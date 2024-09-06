"use client";

import { useState } from "react";

import CreateUser from "./CreateUser";
import Button from "@/app/components/Button";

const AdminPanelItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CreateUser isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div onClick={() => setIsOpen(true)} className="cursor-pointer hover:opacity-75 transition">
				 <Button>
						Profile Item
				 </Button>
      </div>
    </>
  );
};

export default AdminPanelItem;
