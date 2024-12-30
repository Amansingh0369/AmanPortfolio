import React from 'react';
import 'tailwindcss/tailwind.css';
import ShineBorder from "@/components/ui/shine-border.tsx"; // Ensure Tailwind CSS is imported

const images = [
    { src: 'src/assets/images/TApp.png', alt: 'Transaction App Screenshot 1' },
    { src: 'src/assets/images/TApp-main.png', alt: 'Transaction App Screenshot 2' },
    { src: 'src/assets/images/TApp-login.png', alt: 'Transaction App Screenshot 3' },
    { src: 'src/assets/images/Tapp-send.png', alt: 'Transaction App Screenshot 4' },
];

const TransactionAppGallery = () => {
    return (
        <div className="container mx-auto px-4">
            {/* Grid layout for large screens */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4">
                {images.map((image, index) => (
                    <div key={index}>
                        <ShineBorder
                            className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black shadow-xl hover:scale-105 transform transition-transform duration-300"
                            color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="rounded-lg object-cover w-full h-60"
                            />
                        </ShineBorder>
                    </div>
                ))}
            </div>

            {/* Horizontal scroll layout for small screens */}
            <div className="lg:hidden flex overflow-x-auto space-x-4">
                {images.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
                        <ShineBorder
                            className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black shadow-xl transform transition-transform duration-300"
                            color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="rounded-lg object-cover w-full h-60"
                            />
                        </ShineBorder>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransactionAppGallery;
