import BannerImg from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <section id="home" className="bg-white">
            <div className="max-w-6xl mx-auto px-5">
                <div className="min-h-[500px] grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            <span className="text-gray-900">
                                Build Your Ideal
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>
                        <p className="mt-5 max-w-lg text-gray-500 leading-6">
                            Explore frontend, backend, database, and
                            tooling options, compare them side by side,
                            and put together the stack that fits your
                            next project.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <button className="btn border-none text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:opacity-90">
                                Explore Technologies
                            </button>
                            <button className="btn btn-outline border-gray-200 text-gray-600 hover:bg-gray-100">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src={BannerImg} alt="Development stack illustration" className="w-full max-w-md object-contain"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;