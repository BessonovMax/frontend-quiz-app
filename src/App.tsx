import { Outlet } from "react-router";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-background text-text-primary font-display min-h-dvh px-6 leading-none font-medium md:px-16 xl:px-[8.75rem]">
      <div className="mx-auto max-w-[1440px] gap-[2.5rem] md:gap-[4rem] xl:gap-[8rem] 2xl:max-w-[1650px]">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
