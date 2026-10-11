function App() {
    return (
        <div className="min-h-screen bg-page p-4">
            <div className="max-w-[1400px] mx-auto font-serif overflow-hidden rounded-lg bg-bg">
                <nav className="flex items-center flex-wrap p-4">
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

                <header className="flex flex-col gap-8 p-8 md:flex-row md:items-center">
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">Invest for the Future</h1>
                        <p className="text-lg mt-6 max-w-md text-text-muted">
                            Work with all the necessary information and tools to boost
                            money flow from your capital investment using Cashmap!
                        </p>
                        <div className="flex mt-4 gap-2">
                            <button className="bg-inverse text-on-inverse px-4 py-2 rounded-sm font-semibold hover:opacity-90 cursor-pointer">Download App</button>
                            <button>Find Out More</button>
                        </div>
                    </div>
                    <div className="flex-1 rounded-md bg-surface min-h-64">Ilustracion</div>
                </header>

                <section className="p-8">
                    <h2 className="text3xl md:text-4xl font-bold mb-6 leading-tight">Get the Most Out of Your Investments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <article className="flex flex-col gap-3 bg-surface rounded-md p-12">
                            <h3 className="text-xl md:text-2xl">Unlimited Portfolio Accounts</h3>
                            <p>Manage all your financial assets from one place</p>
                            <button className="self-start">Find Out More</button>
                        </article>
                        <article className="flex flex-col gap-3 bg-surface rounded-md p-12">
                            <h3 className="text-xl md:text-2xl">Full Analytics in Your App</h3>
                            <p>Analyze the results and try different Strategies for more income</p>
                            <button className="self-start">Read More</button>
                        </article>
                    </div>
                </section>

                <section>
                    <div>
                        <h2>Advantages</h2>
                        <p>
                            We listen our customers and work with them
                            to improve the user experience of our platform.
                        </p>
                    </div>
                    <div>
                        <article>
                            <h3>Smooth Start</h3>
                            <p>
                                Without a visit to office, we will set up
                                your brokerage account in 5 minutes.
                            </p>
                            <button class="btn-inverse">Open an Account</button>
                        </article>

                        <article>
                            <h3>24/7 Support</h3>
                            <p>
                                Our support team is always available to answer
                                questions and resolve any issues.
                            </p>
                            <button>Ask a Question</button>
                        </article>

                        <article>
                            <h3>Low Comissions</h3>
                            <p>
                                We give you the best rate we can for any kind of
                                transactions. no extra fees.
                            </p>
                            <button>Explore Prices</button>
                        </article>

                        <article>
                            <h3>Invest Any Amount</h3>
                            <p>
                                You don't have to have large sums to start investing,
                                start small.
                            </p>
                            <button>Start Now</button>
                        </article>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default App