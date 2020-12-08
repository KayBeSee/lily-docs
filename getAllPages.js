function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(fileName)
  }));
}

// .sort((a, b) => a.module.meta.order - b.module.meta.order)

export const pages = importAll(
  require.context("./pages/", true, /\.mdx$/)
);