const SPA_ROUTES = ['/landing-page']

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const response = await env.ASSETS.fetch(request)

    if (response.status === 404 && SPA_ROUTES.includes(url.pathname)) {
      return env.ASSETS.fetch(new URL('/index.html', request.url))
    }

    return response
  }
}
