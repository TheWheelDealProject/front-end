// src/utils/importImages.js

const importAll = (requireContext) => {
    return requireContext.keys().map(requireContext);
};

const images = importAll(require.context('../assets/all-images', false, /\.(png|jpe?g|svg)$/));

export default images;
