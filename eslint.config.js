import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: ['next/core-web-vitals', 'next/typescript'],
  files: ['**/*.{ts,tsx}'],
});
