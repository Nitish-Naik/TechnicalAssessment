declare module 'react-simple-maps' {
  import * as React from 'react';

  export const ComposableMap: React.ComponentType<Record<string, unknown>>;

  export const Geographies: React.ComponentType<{
    geography?: string;
    children?: (args: { geographies: Record<string, unknown>[] }) => React.ReactNode;
    [key: string]: unknown;
  }>;

  export const Geography: React.ComponentType<{
    geography?: Record<string, unknown>;
    key?: string | number;
    style?: Record<string, unknown>;
    [key: string]: unknown;
  }>;

  const _default: Record<string, unknown>;
  export default _default;
}
