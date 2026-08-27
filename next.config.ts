import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repositoryName = 'moondesign_game_homepage';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGitHubPages ? `/${repositoryName}` : '',
  assetPrefix: isGitHubPages ? `/${repositoryName}/` : '',
};

export default nextConfig;
