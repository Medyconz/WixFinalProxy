const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "https://medlecontent.wixstudio.com/kusportsa",
    changeOrigin: true,
    selfHandleResponse: false,
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader("origin", "https://medlecontent.wixstudio.com");
    },
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
});
