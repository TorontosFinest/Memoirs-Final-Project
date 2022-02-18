import MyDropdown from "../DropdownComponent";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-2 w-screen sm:px-4 md:px-6 2xl:px-24">
      <div className="w-screen">
        <h1 className="text-2xl lg:text-4xl 2xl:text-6xl 2xl:mt-1 text-white font-Poppins bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600">
          Your Memmoirs.
        </h1>
      </div>
      <MyDropdown />
    </div>
  );
}
