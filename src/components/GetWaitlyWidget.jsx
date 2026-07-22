import { useState, useEffect } from "react";

const WAITLY_SCRIPT =
  "https://getwaitly-staging.aymaneprowork.workers.dev/widget.js";

const GetWaitlyWidget = () => {
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

  if (error) {
    return (
      <p className="text-red-500 text-sm mt-2">
        Failed to load the widget. Check the console for details.
      </p>
    );
  }

  return (
    <div className="mt-4 p-4 border border-primary-dark/20 dark:border-white/20 rounded-lg bg-gray-50 dark:bg-gray-800">
      <div className="gw-widget" data-slug="testpay">
        {!loaded && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Loading signup form...
          </p>
        )}
      </div>
    </div>
  );
};

export default GetWaitlyWidget;
