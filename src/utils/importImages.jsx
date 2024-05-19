const importAll = (requireContext) => {
    return requireContext.keys().map(requireContext);
};

const images = importAll(require.context('../assets/all-images/comments-img', false, /.(png|jpe?g|svg)$/));

export default images;