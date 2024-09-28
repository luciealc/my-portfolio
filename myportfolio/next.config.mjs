/** @type {import('next').NextConfig} */
// require('dotenv').config()
const nextConfig = {
    env: {
        serviceKey: process.env.SERVICE_KEY,
        templateId: process.env.TEMPLATE_ID,
        publicKey: process.env.PUBLIC_KEY
      },
};

export default nextConfig;




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export',
// };

// export default nextConfig;
