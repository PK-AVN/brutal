import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/Main";
import { authOptions } from "@/nextAuth";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  let renderChildren = <Login />;

  if (session) {
    renderChildren = <Dashboard />;
  }

  return <Main>{renderChildren}</Main>;
};

export default DashboardPage;
