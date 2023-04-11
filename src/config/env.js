/* istanbul ignore file */
const envConfig = {
  COMMIT_HASH: process.env.REACT_APP_COMMIT_HASH || "",
  NODE_ENV: process.env.NODE_ENV || "",
  API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT || "",
};

export const isDev = envConfig.NODE_ENV === "development";
export const isTest = envConfig.NODE_ENV === "test";
export const isProd = envConfig.NODE_ENV === "production";

const baseUrlArray = envConfig.API_ENDPOINT.split("/");
export const baseUrl = `${baseUrlArray[0]}//${baseUrlArray[2]}`;

export default envConfig;
