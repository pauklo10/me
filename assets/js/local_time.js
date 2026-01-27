export function showLocalTime() {
  const timeEl = document.getElementById("local-time");
  if (!timeEl) return;

  function updateClock() {
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString("en-CA", {
      timeZone: "America/Toronto",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  updateClock();
  const intervalId = setInterval(updateClock, 1000);
  return () => clearInterval(intervalId);
}
