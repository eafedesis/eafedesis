function scrollClick(params) {
  return params === "top"
    ? (location.href = "#bottom")
    : (location.href = "#top");
}
