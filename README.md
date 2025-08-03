how to start project

npm i tw-animate-css

npx shadcn@latest init

npx shadcn@latest add button

usePathname()

there is filename call CTA that is CallToAction.tsx

check the globals.css file for all the css

npx shadcn@latest add table

npx shadcn@latest add form

npm install @hookform/resolvers zod

npm install zod @hookform/resolvers

npx shadcn@latest add input textarea

npx shadcn@latest add select

npm install @clerk/nextjs

check out clerk to learn more

used supabase

```js
  if (subject && topic) {
    query = query
      .ilike("subject", `%${subject}%`)
      .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
  } else if (subject) {
    query = query.ilike("subject", `%${subject}%`);
  } else if (topic) {
    query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
  }
```

npm i @jsmastery/utils

npm install @vapi-ai/web

npx @sentry/wizard@latest -i nextjs --saas --org daniel-zp --project javascript-nextjs