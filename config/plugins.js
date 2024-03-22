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
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3,
          updateAgeOnGet: false,
        },
      },
      strategy: {
        debug: true,
        maxAge: 3600,
        updateAgeOnGet: false,
        contentTypes: [
          // list of Content-Types UID to cache
          {
            contentType: "api::genre.genre",
            maxAge: convertToMilliseconds(12, "h"),
          },
          {
            contentType: "api::main-slide.main-slide",
            maxAge: convertToMilliseconds(12, "h"),
          },
          {
            contentType: "api::manga.manga",
            maxAge: convertToMilliseconds(12, "h"),
          },
        ],
      },
    },
  },
});

function convertToMilliseconds(value, unit) {
  let milliseconds;

  switch (unit) {
    case "s":
    case "second":
    case "seconds":
      milliseconds = value * 1000;
      break;
    case "m":
    case "minute":
    case "minutes":
      milliseconds = value * 60 * 1000;
      break;
    case "h":
    case "hour":
    case "hours":
      milliseconds = value * 60 * 60 * 1000;
      break;
    case "d":
    case "day":
    case "days":
      milliseconds = value * 24 * 60 * 60 * 1000;
      break;
    default:
      throw new Error(
        'Invalid unit provided. Please provide "s", "m", "h", or "d".'
      );
  }

  return milliseconds;
}
