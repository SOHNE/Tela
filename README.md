# TelaBrew

> **Disclaimer:** This project is currently a proof-of-concept. It was mostly vibecoded with light human supervision, so expect rough edges and treat anything here as provisional.

TizenBrew site-modification module that opens [Tela Brasil](https://telabrasil.cultura.gov.br/) (the Brazilian Ministry of Culture's streaming platform) on Samsung Tizen TVs, and injects a spatial-navigation polyfill so the D-pad remote can move focus between elements.

## Install

1. Install [TizenBrew](https://github.com/reisxd/TizenBrew) on your TV.
2. Open the module manager and add `@zschzen/telabrew`.
3. Launch it from the home screen.

## What it does

- Sets the launch URL to `https://telabrasil.cultura.gov.br/`.
- Injects the [WICG spatial-navigation polyfill](https://github.com/WICG/spatial-navigation) so arrow keys move focus.
- Adds a high-contrast `:focus` outline so you can see where the cursor is.

That's it. No adblock, no theming, no service.

## Credits

Spatial-navigation polyfill © LG Electronics / WICG, MIT licensed. Everything else GPL-3.0.
