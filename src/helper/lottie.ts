const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const handleOptionsLottie = (animationData: any) => {
  const optionWithAnimation = {
    ...defaultOptions,
    animationData: animationData,
  };
  return optionWithAnimation;
};
