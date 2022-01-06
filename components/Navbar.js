import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-black shadow-xl w-full h-16">
      <div className="flex flex-row items-center align-center p-2">
        <Link href="/countBy/5">
          <a className="bg-blue-600 rounded-2xl px-4 py-2 hover:bg-blue-700 hover:rounded-lg transition-all duration-100 ease-in">
            <span className="text-white font-bold">Count By 5</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
