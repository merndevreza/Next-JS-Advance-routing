const parallelDashboardLayout = ({
  children,
  assignments,
  notifications,
  quiz,
}) => {
  return (
    <div>
      {children}
      <div className=" grid gap-6 grid-cols-2 grid-rows-2 p-8">
        {assignments}
        {notifications}
        {quiz}
      </div>
    </div>
  );
};

export default parallelDashboardLayout;
