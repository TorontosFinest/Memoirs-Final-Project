import MyDropdown from "../DropdownComponent";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-2 w-screen">
      <div className="w-screen">
        <h1 className="text-2xl mt-0 text-white font-Poppins bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600">
          Your Memmoirs.
        </h1>
      </div>
      <MyDropdown />
    </div>
  );
}
