import { useState, useEffect } from "react";

const POPUP_SCRIPT = "https://getwaitly-staging.aymaneprowork.workers.dev/widget.js";

const WaitlyPopupTrigger = ({ slug }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const existing = document.querySelector(
      `script[data-slug="${slug}"]`
    );
    if (existing) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = POPUP_SCRIPT;
    script.defer = true;
    script.dataset.slug = slug;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [slug]);

  return (
    <div className="py-12 px-5 flex justify-center">
      <button
        id="popup-demo-trigger"
        type="button"
        className="gw-trigger px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/80 font-medium text-sm"
      >
        {loaded ? "Join the waitlist" : "Loading..."}
      </button>
    </div>
  );
};

export default WaitlyPopupTrigger;