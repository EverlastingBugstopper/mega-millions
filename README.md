# Mega Millions Generator

This is a Cloudflare worker that is hosted at [megamillions.averyharnish.com](https://megamillions.averyharnish.com) that will give you mega million ticket numbers.

## Usage

If you'd like to modify and deploy this on your own site, it's super easy! This is what you should do:

- Clone this repository

- Change the HTML in [/src/html.js](https://github.com/EverlastingBugstopper/mega-millions/blob/master/src/html.js) to something that suits your fancy

- Create a .env file that looks like this

```env
CF_ACCOUNT_ID=
CF_API_KEY=
CF_EMAIL=email@example.com
CF_ZONE_ID=
SCRIPT_NAME=megamillions
```

- Run `npm run build` and `npm run deploy`

- Go to your Cloudflare workers dashboard and add routes that your script should run on. Mine is megamillions.averyharnish.com/*

### Random Number Generation

This repository uses Cloudflare's lavarand service provided at [csprng.xyz](https://csprng.xyz) to generate random numbers. That specific code is in [/src/lotto.js](https://github.com/EverlastingBugstopper/mega-millions/blob/master/src/lotto.js)