import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/Main";

const DashboardPage = () => {
  const isUserAuthenticated = false;

  let renderChildren = <Login />;

  if (isUserAuthenticated) {
    renderChildren = <Dashboard />;
  }

  return <Main>{renderChildren}</Main>;
};

export default DashboardPage;
