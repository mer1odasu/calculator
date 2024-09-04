import Sidebar from "../components/sidebar/Sidebar";
import CalculatorList from "./components/CalculatorList";

export default async function UsersLayout({ children }: { children: React.ReactNode }) {

  return (

    <Sidebar>
      <div className="h-full">
				<CalculatorList />
        {children}
      </div>
    </Sidebar>
  );
}
