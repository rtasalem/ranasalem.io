import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <div>
            <nav
                className="border-2 border-red-500 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <Link
                    href="https://github.com/rtasalem"
                    className="-mx3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900"
                >
                    github
                </Link>
                <Link
                    href="https://www.linkedin.com/in/ranatasalem/"
                    className="-mx3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900"
                >
                    linkedin
                </Link>
            </nav>
        </div>
    );
};

export default Footer;
