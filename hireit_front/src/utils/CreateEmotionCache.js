import createCache from '@emotion/cache';

export const CreateEmotionCache = () => {
  return createCache({ key: 'css' });
};
