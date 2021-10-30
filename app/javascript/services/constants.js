const getWebsiteBaseUrl = () => {
  let url = "";
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    console.log("Development Mode");
    url = "http://127.0.0.1:3000/api/v1/";
  } else {
    console.log("Production Mode");
    url = "";
  }
  return url;
};

export const WEBSITE_BASE_URL = getWebsiteBaseUrl();

export const HOMEPAGE_API = WEBSITE_BASE_URL + "homepage";
export const CATEGORY_API = WEBSITE_BASE_URL + "categories/";
export const PRODUCT_API = WEBSITE_BASE_URL + "products/";

export const ROOT = "/";
