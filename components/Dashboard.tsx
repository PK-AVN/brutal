import useAuthStore from "@/store/authStore";

const Dashboard = () => {
    const { user } = useAuthStore();
    return <div> Hello {user?.name}</div>;
};

export default Dashboard;
