const Header: React.FC = () => {
    return (
        <div>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <a href="/" className="-mx3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900">rsalem.io</a>
                <a href="/about" className="-mx3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900">About</a>
                <a href="/blog" className="-mx3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900">Ramblings</a>
                <a href="/projects" className="-mx3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900">Projects</a>
                <a href="/contact" className="-mx3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900">Contact</a>
            </nav>
        </div>
    )
}

export default Header;
