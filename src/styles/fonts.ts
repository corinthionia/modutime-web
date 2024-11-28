import localFont from 'next/font/local';

export const Pretendard = localFont({
  src: [
    {
      path: '../assets/fonts/Pretendard-Bold.subset.woff2',
      weight: '700',
    },
    {
      path: '../assets/fonts/Pretendard-SemiBold.subset.woff2',
      weight: '600',
    },
    {
      path: '../assets/fonts/Pretendard-Medium.subset.woff2',
      weight: '500',
    },
    {
      path: '../assets/fonts/Pretendard-Regular.subset.woff2',
      weight: '400',
    },
  ],
  preload: true,
  style: 'normal',
  display: 'swap',
  variable: '--font-pretendard',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'Malgun Gothic',
    'sans-serif',
  ],
});
