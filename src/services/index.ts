import envConfig from "../config/env.config";

export const recentPost = async () => {
  const res = await fetch(
    `${envConfig.baseAPi}/items?sortBy=-createdAt&limit=6`
  );
  return res.json();
};
