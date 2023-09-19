# reactnative-nextjs-template

> NOTE: Work in progress until version is 1.0.0+

**Build native apps (iOS/Android/Windows/macOS) and an SEO-optimized web app from the same React codebase, using React Native/Expo and Next.js**

(Created with `npx create-next-app -e with-expo [PROJECTNAME]`)

![reactnative-nextjs-template demo on phone](docs/github_preview.jpg)

_Note: this is my v5 boilerplate for React apps. See also my [Next.js + Firebase boilerplate](https://github.com/tomsoderlund/nextjs-pwa-firebase-boilerplate)._

## Why is this awesome?

This allows you to build _both_ a native app for [iOS/Android/Windows/macOS/etc](https://reactnative.dev/docs/out-of-tree-platforms), as well as an SEO-optimized web app _from same codebase_.

### Use cases

- You want a the **same user experience** in a native app and on the web.
- You want a native app and also a **separate website** that share some code.
- You want a **native app and an API**, powered by Next.js and Vercel serverless functions, **in the same repository**.

## Todo list

- [X] Server-side rendering (SSR)
- [X] SEO: Semantic tags e.g. H1, H2, H3
- [X] SEO: Page metadata support
- [X] Header (from `react-native-elements`)
- [ ] Navigation
- [ ] Flexible CSS solution
- [ ] Font support
- [ ] SVG support
- [X] Video player

## Demo

See [**reactnative-nextjs-template** running on Vercel here](https://reactnative-nextjs-template.vercel.app/).

![reactnative-nextjs-template demo on phone](docs/demo.jpg)

## Support this project

Did you or your company find `reactnative-nextjs-template` useful? Please consider giving a small donation, it helps me spend more time on open-source projects:

[![Support Tom on Ko-Fi.com](https://www.tomsoderlund.com/ko-fi_tomsoderlund_50.png)](https://ko-fi.com/tomsoderlund)

## Deploying

Setup and deploy your own project using this template with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Ftomsoderlund%2Freactnative-nextjs-template&env=NEXT_PUBLIC_FIREBASE_API_KEY&envDescription=Enter%20your%20public%20Firebase%20API%20Key&envLink=https://github.com/tomsoderlund/reactnative-nextjs-template#deploying-with-vercel)

## How to use

> Note: If you set up your project using the Deploy button above, you only need to clone your own repo instead of this repository.

Clone this repository:

    git clone https://github.com/tomsoderlund/reactnative-nextjs-template.git [MY_APP]

Remove the .git folder since you want to create a new repository

    rm -rf .git

Install dependencies:

    cd [MY_APP]
    yarn  # or npm install

Start it in Next.js/web mode by:

    yarn dev

…then navigate to `http://localhost:3005/`

Start Expo for native apps:

	yarn dev:native

In production:

    yarn build
    yarn start

## Modifying the app to your needs

### Change app name

Do search/replace for `reactnativenextjstemplate` to something else. Avoid hyphens/underscores because of iOS/Android bundle names.

Change name in `public/manifest.json`

### Change port number

Do search/replace for “3005” to something else.

## Read more

- Expo’s guide on Next.js: https://docs.expo.dev/guides/using-nextjs/
    - [@expo/next-adapter](https://github.com/expo/expo-cli/tree/main/packages/next-adapter)
    - Code example: https://github.com/expo/examples/tree/master/with-nextjs
- Solito framework: https://solito.dev/ (awesome but uses it’s own components/syntax)
- create-universal-app (CUA): https://github.com/chen-rn/CUA
