import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',  // Mantén esta configuración si es necesaria
  },
  productionBrowserSourceMaps: true,  // Habilitar source maps en producción
};

export default nextConfig;
