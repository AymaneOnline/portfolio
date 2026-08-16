export const navigate = (to) => {
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0 });
};

export const handleLinkClick = (e, to) => {
  if (
    e.defaultPrevented ||
    e.button !== 0 ||
    e.metaKey ||
    e.ctrlKey ||
    e.shiftKey ||
    e.altKey
  ) {
    return;
  }
  e.preventDefault();
  navigate(to);
};