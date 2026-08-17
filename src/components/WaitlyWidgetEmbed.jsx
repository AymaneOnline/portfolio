import { useState, useEffect } from "react";

const WAITLY_SCRIPT =
  "https://getwaitly-staging.aymaneprowork.workers.dev/widget.js";

const WaitlyWidgetEmbed = ({ slug }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = WAITLY_SCRIPT;
    script.defer = true;
    script.onload = () => setLoaded(true);
    script.onerror = () => setError(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full rounded-xl border border-black/5 dark:border-white/10 bg-[#f6f6f7] dark:bg-white/[0.04] p-6">
      {error && (
        <p className="text-red-500 text-sm">
          Failed to load the widget. Check the console for details.
        </p>
      )}

      <div className="gw-widget" data-slug={slug}>
        {!loaded && !error && (
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-8">
            Loading signup form...
          </p>
        )}
      </div>
    </div>
  );
};

export default WaitlyWidgetEmbed;