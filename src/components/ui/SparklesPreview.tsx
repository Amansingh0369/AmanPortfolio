export function Codework() {
    return (
        <div className="h-fit mb-10  w-full bg-black flex flex-col items-center space-y-1  overflow-hidden rounded-md">
            <div>
                <h1 className="md:text-4xl  mt-14 text-4xl lg:text-6xl font-bold text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent relative z-20">
                    CODE : WORK
                </h1>

                <div className="w-[40rem]  h-20 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                     Core component
                    {/*<SparklesCore*/}
                    {/*    background="transparent"*/}
                    {/*    minSize={0.4}*/}
                    {/*    maxSize={1}*/}
                    {/*    particleDensity={1200}*/}
                    {/*    className="w-full h-full"*/}
                    {/*    particleColor="#FFFFFF"*/}
                    {/*/>*/}


                    {/* Radial Gradient to prevent sharp edges */}
                    {/*<div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>*/}

                </div>
            </div>
            <div className="w-[95%] md:w-[85%] lg:w-[80%] mx-auto relative">
                <div className="backdrop-blur-[0.5px] border-2 border-neutral-700 text-white p-6 md:p-8 lg:p-12 rounded-3xl shadow-2xl hover:border-neutral-600 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
                        <div className="flex items-center space-x-4 md:space-x-6">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-600 ring-2 md:ring-4 ring-purple-500">
                                <img src="/assets/avatar-1.png" alt="amanhereee" className="w-full h-full rounded-full" />
                            </div>
                            <span className="font-bold text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Aman</span>
                        </div>
                        <div className="text-base md:text-md lg:text-md text-[#a6f1a6] font-medium">Remote • Dec 2024 - Present</div>
                    </div>
                    <div className="mt-6 md:mt-8">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">Freelancer</h1>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#cba6f7] mt-2 md:mt-4">
                            Full Stack Engineer
                        </h2>
                        <ul className="mt-6 md:mt-8 space-y-3 md:space-y-4 text-base md:text-lg group relative  ">
                            <li className="flex items-start space-x-3 hover:translate-x-2 transition-all duration-300">
                                <span className="text-purple-400 text-xl md:text-2xl flex-shrink-0">•</span>
                                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">Improved the performance of a PERN-based full-stack website <a className="font-bold text-[#cba6f7] hover:cursor-pointer z-1000" href="https://batchit.in" target="_blank" rel="noopener noreferrer">Batchit.in</a> </span>
                            </li>
                            <li className="flex items-start space-x-3 hover:translate-x-2 transition-all duration-300">
                                <span className="text-purple-400 text-xl md:text-2xl flex-shrink-0">•</span>
                                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">Solved the error in Batchit.in by implementing an API in Node.js that boosted payment automation and streamlined the payment capture system by Razor Pay.</span>
                            </li>
                            <li className="flex items-start space-x-3 hover:translate-x-2 transition-all duration-300">
                                <span className="text-purple-400 text-xl md:text-2xl flex-shrink-0">•</span>
                                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">Eliminated 100% manual payment capture by implementing an auto-capture API in a PERN-based full-stack website through the integration of the Razorpay API.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6 md:mt-8 text-sm md:text-base lg:text-md text-[#8be8fd] flex flex-wrap gap-2 md:gap-3">
                        <div className="group relative">
                            <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all duration-300 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">Javascript</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">Javascript</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all duration-300 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">React</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">React</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all duration-300 text-center after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">RESTful api</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] text-center rounded-full hover:bg-[#3d3d40] transition-colors text-sm">RESTful API</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all duration-300 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">Nodejs</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">Nodejs</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all duration-300 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">MySql</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">MySql</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all duration-300 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">Websockets</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">Websockets</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all duration-300 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">Linux</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">Linux</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all duration-300 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent text-center after:border-t-[#4a3f69]">Discord API</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">Discord API</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all duration-300 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">aapanel</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] rounded-full text-[#cba6f7] hover:bg-[#3d3d40] transition-colors text-sm">aapanel</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
