import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-primaryapp-100 antialiased">
      {/* <Navbar /> */}

      <div className="relative flex flex-1 flex-col gap-4 p-8 pt-6">
        {/* Contéudo da página */}
        <Outlet />
      </div>

      <div className="fixed bottom-10 right-10 hidden flex-col gap-4 md:flex">
        <div>
          <h1>hello</h1>
        </div>
      </div>
    </div>
  )
}