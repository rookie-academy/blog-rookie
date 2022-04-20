const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/css/');
    eleventyConfig.addPassthroughCopy('./src/assets/');
    eleventyConfig.addPassthroughCopy('./src/android-chrome-192x192.png');
    eleventyConfig.addPassthroughCopy('./src/android-chrome-512x512.png');
    eleventyConfig.addPassthroughCopy('./src/apple-touch-icon.png');
    eleventyConfig.addPassthroughCopy('./src/favicon-16x16.png');
    eleventyConfig.addPassthroughCopy('./src/favicon-32x32.png');
    eleventyConfig.addPassthroughCopy('./src/favicon.ico');
    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/site.webmanifest');
    eleventyConfig.addPassthroughCopy('./src/sitemap.xml');

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
      });

    return {
        dir: {
            input:"src",
            output:"public"
        }
    };
}