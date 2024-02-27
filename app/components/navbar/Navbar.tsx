import { SafeUser } from "@/app/types";

import Categories from "./Categories";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {
  return ( 
    <div className="fixed w-full z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
          bg-purple-800  // Darker purple background color
        "
      >
        <Container>
          <div 
            className="
              flex 
              flex-row 
              items-center 
              justify-between
              gap-3
              md:gap-0
              text-white  // Text color white for better visibility
            "
          >
            <Logo />
            
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
      
      <div className="flex justify-center mt-4"> {/* Add margin-top here */}
        <div className="w-full md:w-3/5"> {/* Adjust the width here */}
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
