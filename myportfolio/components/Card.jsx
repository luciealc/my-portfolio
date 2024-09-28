"use client";
import React from "react";
import Image from 'next/image';

const Card = ({ title, body, image, alt, externalLink }) => {
    const [imageUrl, setImageUrl] = React.useState(image);
    return (
        <div className="text-center flex flex-col items-center">
            <a href={externalLink} target="_blank" rel="noopener noreferrer" className="block hover:scale-110 transition-transform duration-300 sm:mx-6">
                <div className="image-card bg-gray-200 max-w-[500px] w-full rounded-t-2xl overflow-hidden">
                    <Image
                        className="card-image w-full h-48 object-cover"
                        src={imageUrl}
                        alt={alt}
                        onError={() => setImageUrl("")}
                        layout="responsive"
                        width={500} // Placeholder width
                        height={250} // Placeholder height
                    />
                </div>
                <div className="text-card py-6 bg-blackish w-full max-w-[500px] rounded-b-2xl">
                    <div className="card-header text-white font-medium text-2xl font-sans">
                        <h4>{title}</h4>
                    </div>
                    <div className="card-body text-white font-light text-base font-sans">
                        <p>{body}</p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Card;







// "use client";
// import React from "react";
// import Image from 'next/image'

// const Card = ({ title, body, image, alt, externalLink }) => {
//     const [imageUrl, setImageUrl] = React.useState(image);
//     return (
//         <div className="text-center">
//             <a href={externalLink} target="_blank" rel="noopener noreferrer" className="block hover:scale-110">
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

// export default Card;