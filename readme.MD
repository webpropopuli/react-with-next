First `npm install --save react react-dom next` then

````{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}```
then
```npm run dev
```

Components are just React.
````

## Linking

Remember that <a> is a server call. Since we want client-side routing, we just
`import Link from 'next/link'` and then
`<Link href="/somepage"> stuff </Link>`
So it's just another React component. It's also tied into location.history which will be nice later on. Also, <Link> works with anything that can accept an onClick prop.

## Umm

'in a real app, we need to create pages dynamically in order to display dynamic content. There are many approaches to do that with Next.js.'

Not sure why that jumped out at me but I had a lightbulb moment, umm... momentarily.
