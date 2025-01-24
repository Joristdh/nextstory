# Next
This project contains multiple routes, but for the pathname prototype, only the demo route is relevant. For QoL there does exist a `/products` page in Next, but this can be removed and does not exist as a story in Storyblok.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Storyblok
This is all based on the free plan on Storyblok. To try it with your own instance, replace the `accesToken` in `storyblok.ts`. However, it should also work using my instance.

## Blok structure
This prototype filters the bloks by the parent folder (adhering the the pathname). To function correctly, all products have to be of `content-type: product` and reside in the `Products` folder in Storyblok.

## Generate types
Generate the types from the Storyblok components with:
```bash
npm run types
```

Make sure the replace the mentions of the spaceId if you've switched to another instance.

## Visual editor 
An https proxy is needed to use the visual editor. This can be achieved with `mkcert` (with `nss` for Firefox support) and the following commands (in the project folder):
```bash
mkcert -install
mkcert localhost
npm install -g local-ssl-proxy
local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
```
