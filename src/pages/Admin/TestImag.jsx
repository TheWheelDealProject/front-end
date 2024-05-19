// src/components/TestImag.js

// import React, { useState, useEffect } from 'react';
// import images from './../../assets/all-images';

// const TestImag = () => {
//     const [randomImage, setRandomImage] = useState(null);

//     useEffect(() => {
//         const getRandomImage = () => {
//             const randomIndex = Math.floor(Math.random() * images.length);
//             return images[randomIndex];
//         };

//         setRandomImage(getRandomImage());
//     }, []);

//     return (
//         <>
//             <h1>TestImage</h1>
//             {randomImage && <img src={randomImage} alt="Random" />}
//         </>
//     );
// };

// export default TestImag;



// src/components/TestImag.js
// src/components/TestImag.js


import React, { useState, useEffect } from 'react';
import images from '../../utils/importImages';

const TestImag = () => {
    const [randomImage, setRandomImage] = useState(null);

    useEffect(() => {
        const getRandomImage = () => {
            const randomIndex = Math.floor(Math.random() * images.length);
            return images[randomIndex];
        };

        setRandomImage(getRandomImage());
    }, []);

    return (
        <>
            <h1>TestImage</h1>
            {randomImage && <img src={randomImage} alt="Random" />}
        </>
    );
};

export default TestImag;
