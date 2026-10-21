function App() {
    return (
        <div className="bg-page">
            <div className="flex flex-col gap-24 max-w-[1400px] mx-auto font-sans overflow-hidden rounded-lg bg-bg">                

                <nav className="flex items-center flex-wrap py-4 px-8">
                    <div className="flex-1 font-bold">Cashmap</div>
                    <ul className="flex gap-8 flex-wrap">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Catalog</a></li>
                        <li><a href="#">Price</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                    <div className="flex flex-1 gap-4 justify-end">
                        <button className="bg-surface text-on-accent px-8 py-2 rounded-sm font-semibold hover:opacity-90 cursor-pointer">
                            Log In
                        </button>
                        <button className="bg-inverse text-on-inverse px-8 py-2 rounded-sm font-semibold hover:opacity-90 cursor-pointer">
                            Download App
                        </button>
                        <button id="theme-toggle">
                            🌙/☀️
                        </button>
                    </div>
                </nav>

                <header className="grid grid-cols-1 gap-8 items-center bg-accent p-16 mx-8 rounded-md">
                    <div className="HERO TEXTflex-1">
                        <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight p-8">Invest for the Future</h1>
                        <p className="text-lg mt-6 max-w-md p-6 text-on-accent">
                            Work with all the necessary information and tools to boost
                            money flow from your capital investment using Cashmap!
                        </p>
                        <div className="flex mt-4 gap-2">
                            <button className="bg-inverse px-4 py-2 text-on-inverse rounded-sm font-semibold hover:opacity-90 cursor-pointer">Download App</button>
                            <button className="bg-transparent text-on-accent">Find Out More</button>
                        </div>
                    </div>
                    <div className="bg-black/10 rounded-md min-h-64 flex justify-center text-sm items-center" >Ilustracion</div>
                </header>

                <section className="p-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Get the Most Out of Your Investments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <article className="flex flex-col gap-3 bg-surface rounded-md p-12">
                            <h3 className="text-xl md:text-2xl">Unlimited Portfolio Accounts</h3>
                            <p className="text-on-accent">Manage all your financial assets from one place</p>
                            <button className="s elf-start">Find Out More</button>
                        </article>
                        <article className="flex flex-col gap-3 bg-surface rounded-md p-12">
                            <h3 className="text-xl md:text-2xl">Full Analytics in Your App</h3>
                            <p className="text-on-accent">Analyze the results and try different Strategies for more income</p>
                            <button className="self-start">Read More</button>
                        </article>
                    </div>
                </section>

                <section className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl">Advantages</h2>
                        <p>
                            We listen to our customers and work with them
                            to improve the user experience of our platform.
                         </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <article className="flex flex-col bg-surface rounded-md p-12"> 
                            <h3>Smooth Start</h3>
                            <p>
                                Without a visit to office, we will set up
                                your brokerage account in 5 minutes.
                            </p>
                            <button>Open an Account</button>
                        </article>

                        <article className="flex flex-col bg-surface rounded-md p-12">
                            <h3>24/7 Support</h3>
                            <p>
                                Our support team is always available to answer
                                questions and resolve any issues.
                            </p>
                            <button>Ask a Question</button>
                        </article>

                        <article className="flex flex-col bg-surface rounded-md p-12">
                            <h3>Low Commissions</h3>
                            <p>
                                We give you the best rate we can for any kind of
                                transactions. No extra fees.
                            </p>
                            <button>Explore Prices</button>
                        </article>

                        <article className="flex flex-col bg-surface rounded-md p-12">
                            <h3>Invest Any Amount</h3>
                            <p>
                                You don't have to have large sums to start investing,
                                start small.
                            </p>
                            <button>Start Now</button>
                        </article>
                    </div>
                </section>

                <section className="flex flex-col gap-4 items-center">
                    <h2 className="text-3xl md:text-4xl">Our Partners</h2>
                    <p>
                        The largest banks, funds and exchanges from all over the world
                        cooperate with us.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="aspect-square bg-surface rounded-md">A</div>
                        <div className="aspect-square bg-surface rounded-md">B</div>
                        <div className="aspect-square bg-surface rounded-md">C</div>
                        <div className="aspect-square bg-surface rounded-md">D</div>
                        <div className="aspect-square bg-surface rounded-md">E</div>
                        <div className="aspect-square bg-surface rounded-md">F</div>
                        <div className="aspect-square bg-surface rounded-md">G</div>
                        <div className="aspect-square bg-surface rounded-md">H</div>
                    </div>
                </section>

                <section className="flex flex-col items-center mx-8 text-center py-24 px-8">
                    <h2 className="text-3xl md:text-4xl">
                        Get the app for Free
                        and Start Now
                    </h2>
                    <button className="bg-inverse text-on-inverse mx-8">Download App</button>
                </section>

                <footer>
                    <div>Cashmap</div>

                    <div>
                        <h4>Resources</h4>
                        <ul>
                            <li><a href>Stocks &amp; Funds</a></li>
                            <li><a href>Learn</a></li>
                            <li><a href>Help &amp; Support</a></li>
                            <li><a href>Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Subscribe to News</h4>
                        <form>
                            <input type="email" placeholder="Your e-mail"/>
                            <button type="submit"></button>
                        </form>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default App