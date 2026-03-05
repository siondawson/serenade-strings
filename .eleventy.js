module.exports = function(eleventyConfig) {
  // Passthrough copy the entire assets folder and all its subfolders
  eleventyConfig.addPassthroughCopy("src/assets");
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
