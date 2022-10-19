import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';

const spec = require('./petstore.yaml');

const ui = SwaggerUI({
  spec,
  dom_id: '#swagger',
  presets: [
    SwaggerUI.presets.apis
  ],
  plugins: [
    SwaggerUI.plugins.DownloadUrl
  ]
});

ui.initOAuth({
  appName: "Swagger UI Webpack Demo",
  clientId: 'implicit'
});
