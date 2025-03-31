import homeIcon from "@iconify/icons-mdi/home-outline";
import educationIcon from "@iconify/icons-mdi/school-outline";
import teamIcon from "@iconify/icons-mdi/account-group-outline";
import { icons } from "@react-icons/all-files";

export const menuItems = [
  { name: "Home", path: "/", hasDropdown: false, icon: homeIcon },
  { name: "Education", path: "/education", hasDropdown: false, icon: educationIcon },
  { name: "Team", path: "/team", hasDropdown: false, icon: teamIcon }
];

  