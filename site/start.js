// Start the app after every module has loaded.
applyTheme();
updateProgress();
window.addEventListener("hashchange", () => {
  if (suppressHash) suppressHash = false;
  else route();
});
route(true);
