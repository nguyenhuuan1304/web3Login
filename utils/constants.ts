import { createThirdwebClient, defineChain } from "thirdweb";

// const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_ID = "dbff9dc28ea92d0e4e9b3b53a45ab2d5"

export const client = createThirdwebClient({
  clientId: CLIENT_ID as string,
});

export const chain = defineChain(84532);
