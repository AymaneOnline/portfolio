import { useState, useEffect } from "react";
import { X } from "lucide-react";

const WAITLY_SCRIPT =
  "https://getwaitly-staging.aymaneprowork.workers.dev/widget.js";

const GetWaitlyWidget = ({ onClose }) => {
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg mx-4 bg-white dark:bg-gray-900 rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-md text-gray-500 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <X size={20} />
        </button>

        <div className="p-6 pt-8">
          {error && (
            <p className="text-red-500 text-sm">
              Failed to load the widget. Check the console for details.
            </p>
          )}

          <div className="gw-widget" data-slug="testpay">
            {!loaded && !error && (
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-8">
                Loading signup form...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetWaitlyWidget;
