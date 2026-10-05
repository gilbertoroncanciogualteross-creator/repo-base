function App() {
    return (
        <>
            <div className="max-w-[1400px] mx-auto font-serif overflow-hidden rounded-lg">
                <nav className="flex items-center flex-wrap p-4 bg-surface">
                    <div className="flex-1 font-bold">Cashmap</div>
                    <ul className="flex gap-6">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Catalog</a></li>
                        <li><a href="#">Price</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                    <div className="flex flex-1 gap-2 justify-end">
                        <button className="bg-surface text-on-accent px-4 py-2 rounded-sm font-semibold hover:opacity-90 cursor-pointer">
                            Log In
                        </button>

                        <button className="bg-inverse text-on-inverse px-4 py-2 rounded-sm font-semibold hover:opacity-90 cursor-pointer">
                            Download App
                        </button>

                        <button id="theme-toggle">
                            🌙/☀️
                        </button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default App