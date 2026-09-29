# LaresCare contact relay

Temporary public server-to-server contact intake. It accepts a POST to `/api/contact` with `name`, `email`, and `message`, then creates an Airtable record. Only `email` is required. The endpoint is public; callers must not treat its URL or request origin as authentication.

Deploy this directory as its own Vercel project:

```sh
cd integrations/contact-relay
vercel link
vercel env add AIRTABLE_ACCESS_TOKEN production
vercel env add AIRTABLE_BASE_ID production
vercel env add AIRTABLE_TABLE_ID production
vercel --prod
```

Set those three environment values in the relay project only. Use a token limited to the target base/table. The main site can forward its validated contact submission to the resulting `/api/contact` URL. Run `npm test` locally before deployment. No package installation is needed.
