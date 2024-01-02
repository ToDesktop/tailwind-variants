# ToDesktop Tailwind Variants Plugin

This Tailwind CSS plugin provides custom variants to apply styles to apps that are running on the [ToDesktop](https://www.todesktop.com) platform. There are also platform specific variants that target Windows, macOS, and Linux.

## Features

- Provides `.todesktop` variant to target apps running on the ToDesktop platform.
- Provides `.windows`, `.mac`, and `.linux` variants.

## Installation

Install the plugin from npm:

```bash
npm install @todesktop/tailwind-variants
```

## Usage

Add the plugin to your `tailwind.config.js` file:

```js
module.exports = {
  // ...
  plugins: [
    require("@todesktop/tailwind-variants"),
    // ...
  ],
};
```

Once the plugin is installed and enabled, you can use the variants in your Tailwind CSS classes like so:

```html
<!-- Hide div on desktop app -->
<div class="todesktop:hidden">
  <!-- ... -->
</div>
```

```html
<!-- Show div on desktop app, hide on web app -->
<div class="hidden todesktop:block">
  <!-- ... -->
</div>
```

```html
<!-- Hide div on Windows desktop app (will still show on Mac/Linux) -->
<div class="windows:hidden">
  <!-- ... -->
</div>
```

```html
<!-- On Mac desktop app make `div` rounded with a shadow -->
<div class="w-20 h-20 bg-blue windows:rounded-lg todesktop:shadow-lg">
  <!-- ... -->
</div>
```

## Acknowledgements

- Thanks to [Peer Richelsen](https://twitter.com/peer_rich) for requesting this.
