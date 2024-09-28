"use client";
import React from "react";
import Image from 'next/image'

export default function MiniCard({ title, image, alt, externalLink }) {

    const [imageUrl, setImageUrl] = React.useState(image);
    return (
        <div className='flex justify-center items-center text-center'>
            <a href={externalLink} target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-lightb shadow-lg rounded-lg p-6 max-w-full max-h-full mt-6 hover:scale-125">
                    <div className="flex items-center space-x-4 mb-4 image-card bg-lightb">
                        <Image
                            className="card-image max-h-[100px]"
                            src={imageUrl}
                            alt={alt}
                            onError={() => setImageUrl("")}
                        />
                    </div>
                    <div>
                        <div className="card-header text-white font-medium text-lg">
                            <h2 className="text-2xl font-medium">{title}</h2>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

// const card = ({ title, body, image, alt, externalLink }) => {
//     const [imageUrl, setImageUrl] = React.useState(image);
//     return (
//         <div className="text-center">
//             <a href={externalLink} target="_blank" rel="noopener noreferrer" className="block">
//                 <div className="image-card bg-gray max-w-[500px] w-full max-h-[250px] rounded-t-2xl overflow-hidden">
//                     <Image
//                         className="card-image"
//                         src={imageUrl}
//                         alt={alt}
//                         onError={() => setImageUrl("")}
//                     />
//                 </div>
//                 <div className="text-card py-6 bg-blackish w-[500px] rounded-b-2xl">
//                     <div className="card-header text-white font-medium text-2xl font-sans">
//                         <h4>{title}</h4>
//                     </div>
//                     <div className="card-body text-white font-light text-base font-sans">
//                         <p>{body}</p>
//                     </div>
//                 </div>
//             </a>
//         </div>
//     );
// };

// export default card;