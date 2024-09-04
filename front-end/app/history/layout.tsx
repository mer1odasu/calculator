import Sidebar from "../components/sidebar/Sidebar";
import HistoryList from "./components/HistoryList";

export default async function UsersLayout({ children }: { children: React.ReactNode }) {

  return (

    <Sidebar>
      <div className="h-full">
				<HistoryList />
        {children}
      </div>
    </Sidebar>
  );
}
