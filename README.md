# izie-datamine

The published files for two sites, split out of [personal-site](https://github.com/IzieStratt/personal-site) so its deploys stay small:

- `website/public/__subdomains/slackdatamineplus/` is https://sdmp.izie.top (the Slack datamine feed, icons, platform pages)
- `website/public/__subdomains/vs/redocumented/` is https://vs.izie.top/redocumented (ReDocumented)
- `website/public/__subdomains/vs/llms.txt` and `index.html` stay here because the daily sync rewrites the ReDocumented counts in them

This repo deploys a static-assets Worker (`izie-datamine`) with no public route. The main worker in personal-site reaches it through the `DATAMINE` service binding and still does all routing, redirects and the ReDocumented API, so every URL is unchanged.

The daily sync (`feed.yml` in IzieStratt/sdmp) commits here. After catalog edits run `python3 scripts/build-redocumented-agent.py` and commit the result.
