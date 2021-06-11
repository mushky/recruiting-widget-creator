export default function layout(locals, pageRenderer) {
  return `
    <html lang="en">
    <head>
      <title>${locals.title || 'Widget Creator'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    </head>
    
    <body class="d-flex flex-column min-vh-100">
      <main class="container flex-grow-1 d-flex flex-column py-4 position-relative">
        ${pageRenderer(locals)}
      </main>
    </body>
    </html>
  `;
}
