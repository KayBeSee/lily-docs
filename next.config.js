const { createLoader } = require("simple-functional-loader");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
// })

module.exports = withBundleAnalyzer({
  pageExtensions: ["js", "jsx", "mdx"],
  experimental: {
    modern: true,
  },
  async redirects() {
    return [
      {
        source: "/get-started",
        destination: "/get-started/part-1",
        permanent: true,
      },
    ];
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    const mdx = [
      options.defaultLoaders.babel,
      {
        loader: "@mdx-js/loader",
      },
    ];

    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        ...mdx,
        createLoader(function (src) {
          const content = [
            'import DocumentationPage from "@/components/DocumentationPage"',
            'export { getStaticProps } from "@/getStaticProps"',
            src,
            "export default (props) => <DocumentationPage meta={meta} {...props} />",
          ].join("\n");

          return this.callback(null, content);
        }),
      ],
    });

    return config;
  },
});
