module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/flashpig/'
    : '/',
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
