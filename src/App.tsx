import { Outlet } from "react-router";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-background text-text-primary font-display min-h-dvh bg-[image:var(--image-mobile)] bg-cover bg-center bg-no-repeat px-6 leading-none font-medium md:bg-[image:var(--image-tablet)] md:bg-size-[58%] md:bg-top-left md:px-16 xl:bg-[image:var(--image-desktop)] xl:bg-cover xl:bg-center xl:px-[8.75rem]">
      <div className="mx-auto max-w-[1440px] gap-[2.5rem] md:gap-[4rem] xl:gap-[8rem]">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
