const plugin = require("tailwindcss/plugin");

const todesktopPlugin = plugin(function ({ addVariant, e }) {
  // Add support for `todesktop` modifier
  // Usage: <div class="todesktop:rounded-lg">...</div>
  addVariant("todesktop", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `html.todesktop .${e(`todesktop${separator}${className}`)}`;
    });
  });

  // Add support for `mac`, `windows` and `linux` modifiers
  // Usage: <div class="mac:hidden">...</div>
  const platformMap = {
    darwin: "mac",
    win32: "windows",
    linux: "linux",
  };
  Object.keys(platformMap).forEach((platform) => {
    const variant = platformMap[platform];
    addVariant(variant, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `html.todesktop-platform-${platform} .${e(
          `${variant}${separator}${className}`
        )}`;
      });
    });
  });
});

module.exports = todesktopPlugin;
