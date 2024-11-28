const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
    prependData: "@import 'variables.scss'; @import 'colors.scss'; @import 'typography.scss';",
  },
};

module.exports = nextConfig;
