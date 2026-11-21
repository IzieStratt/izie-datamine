// Serves the static files and nothing else. Routing, redirects, rate limits and the ReDocumented API live in the
// main site worker (personal-site/worker.js), which calls this one through its DATAMINE service binding.
export default {
  fetch(request, env) {
    return env.ASSETS.fetch(request)
  },
}
