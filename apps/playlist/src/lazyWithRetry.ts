import { ComponentType, lazy as originalLazy } from "react";

type ImportComponent = () => Promise<{ default: ComponentType }>;

export const lazyWithRetry = (importComponent: ImportComponent) =>
  originalLazy((async () => {
    const isPageHasBeenForceRefreshed = JSON.parse(
      localStorage.getItem("page-has-been-force-refreshed") || "false"
    );

    try {
      const component = await importComponent();

      localStorage.setItem("page-has-been-force-refreshed", "false");

      return component;
    } catch (error) {
      if (!isPageHasBeenForceRefreshed) {
        localStorage.setItem("page-has-been-force-refreshed", "true");
        return location.reload();
      }

      throw error;
    }
  }) as ImportComponent);
