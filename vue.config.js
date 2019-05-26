module.exports = {
    outputDir: 'docs', // for github pages
    publicPath: 'bgsyncerrr', // for github pages
    pwa: {
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        swSrc: 'src/service-worker.js',
        swDest: 'service-worker.js',
      }
    }
};
