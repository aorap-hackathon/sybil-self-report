import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  base,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Sybil Self Report',
  projectId: 'a0423bd4d5dfb377c736fc030a4b2f93',
  chains: [
    // mainnet,
    // polygon,
    // optimism,
    // arbitrum,
    base,
    // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});