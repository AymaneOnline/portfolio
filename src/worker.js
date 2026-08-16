export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const response = await env.ASSETS.fetch(request)

    if (response.status === 404 && url.pathname.startsWith('/projects/')) {
      return env.ASSETS.fetch(new URL('/index.html', request.url))
    }

    return response
  }
}