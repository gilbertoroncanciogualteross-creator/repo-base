function App() {
    return (
        <>
            <div className="max-w-[1400px] mx-auto font-serif overflow-hidden bg-surface rounded-lg">
                <nav className="flex items-center p-4 flex-wrap">
                    <div className="logo">Cashmap</div>
                    <ul className="nav-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Catalog</a></li>
                        <li><a href="#">Price</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                    <div className="nav-btn">
                        <button className="btn-inverse">Log In</button>
                        <button className="btn-download">Download App</button>
                        <button id="theme-toggle">🌙/☀️</button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default App