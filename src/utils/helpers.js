import { APPS } from "./constants";

const getApp = () => {
  //   const host = /:\/\/([^\/]+)/.exec(window.location.href)[1];
  const host = window.location.hostname;
  const subdomain = getSubdomain(host);
  console.log(subdomain);
  const main = APPS.find((app) => app.main);
  if (!main) throw new Error("Must have main app");
  if (subdomain === "") return main.app;
  const app = APPS.find((app) => subdomain === app.subdomain);
  if (!app) return main.app;
  return app.app;
};

const getSubdomain = (host) => {
  const hostParts = host.split(".");
  console.log(hostParts);

  let sliceTill = -2;
  //   console.log(hostParts.slice(-1)[0]);

  // for localhost
  // app.localhost
  //app.topcluster.com
  const isLocalHost = hostParts.slice(-1)[0] === "localhost";
  if (isLocalHost) sliceTill = -1;
  //   console.log(hostParts.slice(0, sliceTill).join(""));
  return hostParts.slice(0, sliceTill).join("");
};

export { getApp, getSubdomain };
