module.exports = {
    outputDir: 'docs', // for github pages
    pwa: {
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        swSrc: 'src/service-worker.js',
        swDest: 'service-worker.js',
      }
    }
};
