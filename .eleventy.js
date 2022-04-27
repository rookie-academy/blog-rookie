const { DateTime } = require("luxon");
const emojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime");
module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(emojiReadTime);

    eleventyConfig.addPassthroughCopy('./src/css/');
    eleventyConfig.addPassthroughCopy('./src/assets/');

    eleventyConfig.addPassthroughCopy('./src/android-chrome-192x192.png');
    eleventyConfig.addPassthroughCopy('./src/android-chrome-512x512.png');
    eleventyConfig.addPassthroughCopy('./src/apple-touch-icon.png');
    eleventyConfig.addPassthroughCopy('./src/favicon-16x16.png');
    eleventyConfig.addPassthroughCopy('./src/favicon-32x32.png');
    eleventyConfig.addPassthroughCopy('./src/favicon.ico');
    eleventyConfig.addPassthroughCopy('./src/site.webmanifest');

    eleventyConfig.addPassthroughCopy('./src/admin');

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    eleventyConfig.addFilter("htmlDateString", (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });

    return {
        dir: {
            input:"src",
            output:"public"
        },
        markdownTemplateEngine: 'njk'
    };
}