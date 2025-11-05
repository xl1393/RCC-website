export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('No code provided');
  }

  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res.status(500).send('OAuth credentials not configured');
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
      }),
    });

    const data = await tokenResponse.json();

    if (data.error) {
      return res.status(400).send(`Error: ${data.error_description}`);
    }

    // Return HTML that posts message to opener with token
    const content = {
      token: data.access_token,
      provider: 'github'
    };

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Authorizing</title>
</head>
<body>
  <p>Authorization complete. Closing window...</p>
  <script>
    (function() {
      function receiveMessage(event) {
        window.opener.postMessage(
          'authorization:github:success:${JSON.stringify(content)}',
          event.origin
        );
      }

      window.addEventListener('message', receiveMessage, false);

      // Notify opener that we're ready
      window.opener.postMessage('authorizing:github', '*');

      // Auto-close after a delay
      setTimeout(function() {
        window.close();
      }, 1000);
    })();
  </script>
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    console.error('OAuth error:', error);
    res.status(500).send('Authentication failed: ' + error.message);
  }
}
