
const Dashboard = async () => {

  interface statusesType {
    days: number,
    time_remaining: string,
    date: string;
  }
  const statuses: statusesType = {
    days: 14,
    time_remaining: "13:05:26",
    date: new Date().toDateString(),
  };

  return (
    <div className="flex flex-col flex-1">
      {/* Hello {session?.user?.name} */}
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:justify-items-center md:grid-cols-3 md:justify-items-center md:text-justify bg-lime-50 text-lime-500 rounded-lg">
        {Object.keys(statuses).map(([status, value], statusIndex) => {
          return (
            <div key={statusIndex} className="p-4 flex flex-col gap:1 sm:gap-2">
              <p className="font-medium uppercase">
                {status.replaceAll("_", " ")}
              </p>
              <p className="">{value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
