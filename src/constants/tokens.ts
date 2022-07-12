export interface TokenInterface {
  imageUrl: string;
  name: string;
  symbol: string;
  decimal: number;
}

export const ACCEPT_TOKENS: { [key: string]: TokenInterface } = {
  BUSD: {
    name: "",
    symbol: "",
    decimal: 0,
    imageUrl: "https://cryptologos.cc/logos/binance-usd-busd-logo.svg?v=022",
  },
  USDT: {
    name: "",
    symbol: "",
    decimal: 0,
    imageUrl: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=022",
  },
  USDC: {
    name: "",
    symbol: "",
    decimal: 0,
    imageUrl: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=022",
  },
};

