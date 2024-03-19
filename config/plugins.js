module.exports = () => ({
  "schemas-to-ts": {
    enabled: true,
    config: {
      acceptedNodeEnvs: ["development"],
      commonInterfacesFolderName: "schemas-to-ts",
      verboseLogs: false,
      alwaysAddEnumSuffix: false,
      "generate-data": {
        enabled: true,
      },
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", `https://loremflickr.com/`],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
});
