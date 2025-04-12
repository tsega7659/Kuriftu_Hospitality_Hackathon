import { createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [sepolia],
  connectors: [injected()],
  transports: {
    [sepolia.id]: http("https://sepolia.alchemyapi.io/v2/zVif2DiBQ1ebHL7B9QKZ7uqw9TkcwyTr"),
  },
});