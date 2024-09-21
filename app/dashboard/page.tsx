'use client'
import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/Main";
import useAuthStore from "@/store/authStore";

const DashboardPage = () => {
  const { isAuthenticated } = useAuthStore();

  let renderChildren = <Login />;

  if (isAuthenticated) {
    renderChildren = <Dashboard />;
  }

  return <Main>{renderChildren}</Main>;
};

export default DashboardPage;
