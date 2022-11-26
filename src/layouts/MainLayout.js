import Nav from "./Nav";
import Social from "../components/Social";
import Copyright from "../components/Copyright";

export default function MainLayout({children}){
  return (
    <>
      <Nav />
      <div
        className="neo">
        <div className="neo-center">
          <div className="neo-waves"></div>
        </div>        
      </div>
      <div
        className="
          w-screen
          overflow-hidden
          min-h-screen
          flex
          flex-col
          items-center
          justify-between
          pt-20
          pb-14
          px-4
          sm:py-20
          sm:px-20
          md:p-24
          lg:p-28
          lg:pb-10
        ">
        {children}

        <Social />
        <Copyright />
      </div>      
    </>
  );
}