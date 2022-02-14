import MyDropdown from "../DropdownComponent";

export default function Navbar() {
  return (
    <div className="container flex items-center justify-between p-2">
      <div>
        <p className="text-2xl text-white tracking-wider">mmemoirs</p>
      </div>
      <MyDropdown />
    </div>
  );
}
