const NAVIGATION_TO_LINK = [
  { to: "/", name: "home" },
  { to: "/add-link", name: "+ link" },
];
const NAVIGATION_TO_LINK_AUTH = [
  ...NAVIGATION_TO_LINK,
  { to: "/user", name: "user" },
];
const NAVIGATION_TO_LINK_GUEST = [
  ...NAVIGATION_TO_LINK,
  { to: "/signup", name: "SignUp" },
  { to: "/signin", name: "SignIn" },
];

const FORM_ADD_LINK_INPUT_NAME = "form-add-link-input";
const FORM_ADD_TAG_INPUT = "form-add-tag-input";
const FORM_ADD_AUTHOR_INPUT = "form-add-author-input";
// SIGN UP
const FORM_SIGN_UP_FULL_NAME = "form-sign-up-full-name";
const FORM_SIGN_UP_EMAIL = "form-sign-up-email";
const FORM_SIGN_UP_PASSWORD = "form-sign-up-password";
const FORM_SIGN_UP_RE_TYPE_PASSWORD = "form-sign-up-re-type-password";
// SIGN IN
const FORM_SIGN_IN_EMAIL = "form-sign-in-email";
const FORM_SIGN_IN_PASSWORD = "form-sign-in-password";

export {
  NAVIGATION_TO_LINK_AUTH,
  NAVIGATION_TO_LINK_GUEST,
  FORM_ADD_LINK_INPUT_NAME,
  FORM_ADD_TAG_INPUT,
  FORM_ADD_AUTHOR_INPUT,
  FORM_SIGN_UP_FULL_NAME,
  FORM_SIGN_UP_EMAIL,
  FORM_SIGN_UP_PASSWORD,
  FORM_SIGN_UP_RE_TYPE_PASSWORD,
  FORM_SIGN_IN_EMAIL,
  FORM_SIGN_IN_PASSWORD,
};
