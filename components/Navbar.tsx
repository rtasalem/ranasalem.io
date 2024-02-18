import { navLinks } from "@/constants";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Navbar: React.FC = () => {
    return (
        <div>
            <nav
                className="border-2 border-red-500 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <a
                    href="/"
                    className="-mx3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900"
                >
                    <Image src="/icons/NavbarLogo.svg" alt="logo" width={200} height={30} />
                </a>
                <div>
                    <ul className="gap-12 flex block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900">
                        {navLinks.map((link) => (
                            <a href={link.href} key={link.key}>
                                {link.label}
                            </a>
                        ))}
                    </ul>
                </div>
                {/* <div className="flex items-center justify-center w-8 h-8">
                    <ThemeSwitcher />
                </div> */}
            </nav>
        </div>
    );
};

export default Navbar;