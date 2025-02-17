import { BorderBeam } from "@/components/ui/border-beam.tsx";

export function Codework() {
    return (
        <div className="h-fit mb-10 select-none  w-full bg-black flex flex-col items-center space-y-1  overflow-hidden rounded-md">
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

                     Core componen
                </div>
            </div>
            <div className="w-[95%] md:w-[85%] lg:w-[80%] space-y-20 mx-auto relative">

                {/*first code work*/}

                <div className="backdrop-blur-[0.5px] border border-neutral-700 text-white p-6 md:p-8 lg:p-12 rounded-3xl shadow-2xl hover:border-neutral-600 transition-all duration-300">
                    <BorderBeam anchor={90} size={270} duration={10} delay={1} colorFrom={"white"} colorTo={"#cba6f7"} className="rounded-2xl sm:block" />
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
                            <div className="flex items-center space-x-4 md:space-x-6">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-600 ring-2 md:ring-4 ring-purple-500">
                                    <img src="/assets/avatar-1.png" alt="amanhereee" className="w-full h-full rounded-full" />
                                </div>
                                <span className="font-bold text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Aman</span>
                            </div>
                            <div className="text-base md:text-md lg:text-md text-[#a6f1a6] font-medium">Coreshield Technologies • Feb 2025 - Present</div>
                        </div>

                        <div className="mt-6 md:mt-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">Software Development Engineer</h1>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#cba6f7] mt-2 md:mt-4">
                                Frontend Developer
                            </h2>
                            <ul className="mt-6 md:mt-8 space-y-3 md:space-y-4 text-base md:text-lg group relative">
                                <li className="flex items-start space-x-3 hover:translate-x-2 transition-all duration-300">
                                    <span className="text-purple-400 text-xl md:text-2xl flex-shrink-0">•</span>
                                    <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">Leading the frontend development of <span className="font-bold text-blue-400">Coreshield Technologies</span> official website, ensuring seamless user experience and modern UI.</span>
                                </li>
                                <li className="flex items-start space-x-3 hover:translate-x-2 transition-all duration-300">
                                    <span className="text-purple-400 text-xl md:text-2xl flex-shrink-0">•</span>
                                    <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">Working at <span className="font-bold text-white/80">IIT Delhi Campus</span>, collaborating with top talent to build scalable and high-performance applications.</span>
                                </li>
                                <li className="flex items-start space-x-3 hover:translate-x-2 transition-all duration-300">
                                    <span className="text-purple-400 text-xl md:text-2xl flex-shrink-0">•</span>
                                    <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">Part of the <span className="font-bold text-blue-400">P.U.L.S.E</span> team, developing a <span className="font-bold">Predictive Unified Law Enforcement System for Emergencies</span>, a high-impact government project.</span>
                                </li>
                            </ul>
                        </div>

                         <div className="mt-6 md:mt-8 text-sm md:text-base lg:text-md text-[#8be8fd] flex flex-wrap gap-2 md:gap-3">
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">Next.js</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">Next.js</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">Javascript</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">Javascript</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all text-center after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">ReactJs</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] text-center rounded-full hover:bg-[#3d3d40] transition-colors text-sm">ReactJs</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">Tailwind CSS</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">Tailwind CSS</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">Redux</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7]  rounded-full hover:bg-[#3d3d40] transition-colors text-sm">Redux</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">GeoLocater</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">GeoLocater</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">LeafLet</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">LeafLet</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">OpenStreetMap</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">OpenStreetMap~</div>
                        </div>
                    </div>
                </div>


                                {/*second code work*/}

                <div className="backdrop-blur-[0.5px] border border-neutral-700 text-white p-6 md:p-8 lg:p-12 rounded-3xl shadow-2xl hover:border-neutral-600 transition-all duration-300">
                    <BorderBeam anchor={90} size={270} duration={10} delay={1} colorFrom={"white"} colorTo={"#cba6f7"} className="rounded-2xl  sm:block" />
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
                        <div className="flex items-center space-x-4 md:space-x-6">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-600 ring-2 md:ring-4 ring-purple-500">
                                <img src="/assets/avatar-1.png" alt="amanhereee" className="w-full h-full rounded-full" />
                            </div>
                            <span className="font-bold text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Aman</span>
                        </div>
                        <div className="text-base md:text-md lg:text-md text-[#a6f1a6] font-medium">Remote • Feb 2025 - Feb 2025</div>
                    </div>
                    <div className="mt-6 md:mt-8">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">Freelancer</h1>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#cba6f7] mt-2 md:mt-4">
                            Full Stack Engineer
                        </h2>
                        <ul className="mt-6 md:mt-8 space-y-3 md:space-y-4 text-base md:text-lg group relative  ">
                            <li className="flex items-start space-x-3 hover:translate-x-2 transition-all duration-300">
                                <span className="text-purple-400 text-xl md:text-2xl flex-shrink-0">•</span>
                                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">Built Nadar-International, a fully functional production website using TypeScript, Next.js designed for high reliability and scalability. <a className="font-bold text-orange-400 hover:cursor-pointer z-1000" href="https://Nadar-International.com" target="_blank" rel="noopener noreferrer">Nadar-International.com</a> </span>
                            </li>
                            <li className="flex items-start space-x-3 hover:translate-x-2 transition-all duration-300">
                                <span className="text-purple-400 text-xl md:text-2xl flex-shrink-0">•</span>
                                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">Integrated AOS (Animate On Scroll) for smooth animations, enhancing visual appeal and user engagement.</span>
                            </li>
                            <li className="flex items-start space-x-3 hover:translate-x-2 transition-all duration-300">
                                <span className="text-purple-400 text-xl md:text-2xl flex-shrink-0">•</span>
                                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">Ensured optimal performance, responsive design, and accessibility for a professional-grade web presence.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6 md:mt-8 text-sm md:text-base lg:text-md text-[#8be8fd] flex flex-wrap gap-2 md:gap-3">
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">Next.js</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">Next.js</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">Javascript</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">Javascript</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all text-center after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">AOS</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] text-center rounded-full hover:bg-[#3d3d40] transition-colors text-sm">AOS</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">Tailwind CSS</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">Tailwind CSS</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">MySql</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7]  rounded-full hover:bg-[#3d3d40] transition-colors text-sm">MySql</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">SEO</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">SEO</div>
                        </div>
                    </div>
                </div>

                                {/*third code work*/}


                <div className="backdrop-blur-[0.5px] border border-neutral-700 text-white p-6 md:p-8 lg:p-12 rounded-3xl shadow-2xl hover:border-neutral-600 transition-all duration-300">
                    <BorderBeam anchor={90} size={270} duration={10} delay={1} colorFrom={"white"} colorTo={"#cba6f7"} className="rounded-2xl  sm:block" />

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
                        <div className="flex items-center space-x-4 md:space-x-6">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-600 ring-2 md:ring-4 ring-purple-500">
                                <img src="/assets/avatar-1.png" alt="amanhereee" className="w-full h-full rounded-full" />
                            </div>
                            <span className="font-bold text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Aman</span>
                        </div>
                        <div className="text-base md:text-md lg:text-md text-[#a6f1a6] font-medium">Remote • Jan 2025 - Jan 2025</div>
                    </div>
                    <div className="mt-6 md:mt-8">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">Freelancer</h1>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#cba6f7] mt-2 md:mt-4">
                            Frontend Developer
                        </h2>
                        <ul className="mt-6 md:mt-8 space-y-3 md:space-y-4 text-base md:text-lg group relative  ">
                            <li className="flex items-start space-x-3 hover:translate-x-2 transition-all duration-300">
                                <span className="text-purple-400 text-xl md:text-2xl flex-shrink-0">•</span>
                                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">Built Annveda.com, a fully functional production website using TypeScript, Next.js designed for high reliability and scalability. <a className="font-bold text-green-600 hover:cursor-pointer z-1000" href="https://annveda.com" target="_blank" rel="noopener noreferrer">AnnVeda.com</a> </span>
                            </li>
                            <li className="flex items-start space-x-3 hover:translate-x-2 transition-all duration-300">
                                <span className="text-purple-400 text-xl md:text-2xl flex-shrink-0">•</span>
                                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">Integrated AOS (Animate On Scroll) for smooth animations, enhancing visual appeal and user engagement.</span>
                            </li>
                            <li className="flex items-start space-x-3 hover:translate-x-2 transition-all duration-300">
                                <span className="text-purple-400 text-xl md:text-2xl flex-shrink-0">•</span>
                                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">Ensured optimal performance, responsive design, and accessibility for a professional-grade web presence.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6 md:mt-8 text-sm md:text-base lg:text-md text-[#8be8fd] flex flex-wrap gap-2 md:gap-3">
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">Next.js</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">Next.js</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">Javascript</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">Javascript</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all text-center after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">AOS</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] text-center rounded-full hover:bg-[#3d3d40] transition-colors text-sm">AOS</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">Tailwind CSS</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">Tailwind CSS</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">MySql</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7]  rounded-full hover:bg-[#3d3d40] transition-colors text-sm">MySql</div>
                        </div>
                        <div className="group relative">
                            <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">SEO</div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">SEO</div>
                        </div>
                        {/*<div className="group relative">*/}
                        {/*    <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">Linux</div>*/}
                        {/*    <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7]  rounded-full hover:bg-[#3d3d40] transition-colors text-sm">Linux</div>*/}
                        {/*</div>*/}
                        {/*<div className="group relative">*/}
                        {/*    <div className="absolute hidden group-hover:block bottom-full mb-4 px-3 py-1 md:px-4 md:py-2 bg-[#4a3f69] rounded-full text-[#ffd9eb] shadow-lg transform -translate-y-1 transition-all after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#4a3f69]">aapanel</div>*/}
                        {/*    <div className="px-2 py-0.5 md:px-3 md:py-1.5 bg-[#2d2d30] text-[#cba6f7] rounded-full hover:bg-[#3d3d40] transition-colors text-sm">aapanel</div>*/}
                        {/*</div>*/}
                    </div>
                </div>


                

            </div>
        </div>
    );
}
