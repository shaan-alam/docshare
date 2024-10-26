import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { type PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full p-4">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
