import { Button } from "@nextui-org/react";

const Dashboard = () => {
  return (
    <>
      <main className="mx-auto w-[60%]">
        <div className="flex items-center justify-between border-b border-default-300 pb-4">
          <h1 className="font-lora text-5xl text-primary">Dashboard</h1>
          <Button color="primary" disableRipple>
            New Document
          </Button>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
