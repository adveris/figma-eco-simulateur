import { useState, useEffect } from 'react';

interface Settings {
  uxMultiplier: string;
  uiMultiplier: string;
  additionalAssets: string;
  sizeMult: string;
  requests: string;
}

export function useSettings() {
  const [settings, setSettings] = useState<Settings>({
    uxMultiplier: '2.4',
    uiMultiplier: '1.5',
    additionalAssets: '0',
    sizeMult: '5',
    requests: '78'
  });

  useEffect(() => {
    parent.postMessage({
      pluginMessage: {
        type: 'changeMultiplier',
        ux: {
          dom: settings.uxMultiplier,
        },
        ui: {
          dom: settings.uiMultiplier,
        },
        size: settings.sizeMult,
        additionalAssets: settings.additionalAssets,
        requests: settings.requests
      }
    }, '*');
  }, [settings]);

  return {
    settings,
    setSettings
  };
} 