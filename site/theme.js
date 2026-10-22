// Apply a saved theme before first paint to avoid a flash.
try {
  const theme = JSON.parse(
    localStorage.getItem("medical-va-ui-v1") || "{}",
  ).theme;
  if (theme === "light" || theme === "dark")
    document.documentElement.setAttribute("data-theme", theme);
} catch {}
