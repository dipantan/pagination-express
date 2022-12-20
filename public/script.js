document.addEventListener("DOMContentLoaded", () => {
  const url = new URL(window.location.href);
  const limit = url.searchParams.get("limit") || 10;
  document.querySelector("select").value = limit;

  document.querySelector("select").onchange = (e) => {
    const { value } = e.target;
    const url = new URL(window.location.href);
    url.searchParams.set("limit", value);
    window.location.href = url;
  };
});
