const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const { pathname } = new URL(req.url);

    if (pathname === '/') {
      return new Response(Bun.file('./src/pages/index.html'));
    }

    if (pathname === '/about') {
      return new Response(Bun.file('./src/pages/about.html'));
    }

    return new Response('404!');
  }
})

console.log(`Listening on port ${server.port}`)