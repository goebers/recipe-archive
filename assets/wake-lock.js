(function () {
  if (!("wakeLock" in navigator)) return;

  let lock = null;

  async function acquire() {
    if (lock || document.visibilityState !== "visible") return;
    try {
      lock = await navigator.wakeLock.request("screen");
      lock.addEventListener("release", () => { lock = null; });
    } catch (_) {
      lock = null;
    }
  }

  acquire();
  document.addEventListener("visibilitychange", acquire);
})();
