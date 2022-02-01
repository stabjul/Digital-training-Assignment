export const getStrapiURL = (path = "") => {
  console.log("env", process.env.NEXT_PUBLIC_STRAPI_URL);
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || process.env.NEXT_PUBLIC_STRAPI_URL
  }/api${path}`;
};

export const fetchAPI = async (path: string | undefined) => {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
};
