import { HomeRouter, AppRouter } from "../routers/routers";

export const APPS = [
  {
    subdomain: "www",
    app: HomeRouter,
    main: true,
  },
  {
    subdomain: "app",
    app: AppRouter,
    main: false,
  },
];
