const getWebsiteBaseUrl = () => {
  let url = "";
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    console.log("Development Mode");
    url = "http://127.0.0.1:3000/";
  } else {
    console.log("Production Mode");
    url = "";
  }
  return url;
};

export const WEBSITE_BASE_URL = getWebsiteBaseUrl();

export const HOMEPAGE_API = WEBSITE_BASE_URL + "api/v1/homepage";
export const CATEGORY_API = WEBSITE_BASE_URL + "api/v1/categories/";
export const PRODUCT_API = WEBSITE_BASE_URL + "api/v1/products/";
export const CURRENT_USER = WEBSITE_BASE_URL + "get_current_user/";
export const SIGN_IN_API = WEBSITE_BASE_URL + "users/sign_in";
export const SIGN_UP_API = WEBSITE_BASE_URL + "users/sign_up";
export const ORDERS = WEBSITE_BASE_URL + "api/v1/orders/";
export const SIGN_OUT_API = WEBSITE_BASE_URL + "users/sign_out";

export const ROOT = "/";
export const SIGN_IN_PAGE = "/signin";
export const SIGN_UP_PAGE = "/signup";
export const CART_PAGE = "/cart";
