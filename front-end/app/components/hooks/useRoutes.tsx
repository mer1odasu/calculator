import { useMemo } from "react";
import { CiCalculator1 } from "react-icons/ci";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";

import { usePathname } from "next/navigation";

import { GoHistory } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";

const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "calculator",
        href: "/calculator",
        icon: CiCalculator1,
        active: pathname === "/calculators",
      },
      {
        label: "History",
        href: "/history",
        icon: GoHistory,
        active: pathname === "/history",
      },
			{
        label: "Manual",
        href: "/manual",
        icon: IoBookOutline,
        active: pathname === "/manual",
      },
			{
				label: "Admin panel",
				href: "/admin",
        icon: HiUsers,
				active: pathname === "/admin",
			},
      {
        label: "Logout",
        // onClick: () => signOut(),
        href: "#",
        icon: HiArrowLeftOnRectangle,
      },
    ],
    [pathname]
  );

  return routes;
};

export default useRoutes;
