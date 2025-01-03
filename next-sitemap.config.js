// next-sitemap.js
module.exports = {
    siteUrl: 'https://pvnrw.de', // Replace with your domain
    generateRobotsTxt: true, // This will generate a robots.txt file
    changefreq: 'daily', // How often the content is likely to change
    priority: 0.7, // Default priority for all pages
    sitemapSize: 7000, // Max number of URLs in one sitemap file
  
    // Automatically add dynamic routes from app directory if needed
    additionalPaths: async (config) => {
      const paths = [
        '/about',
        '/artikel/die-bedeutung-der-regelmaBigen-wartung-von-solarmodulen',
        '/artikel/maximierung-der-energieeffizienz-mit-solarmodulen-auf-dem-dach',
        '/artikel/warum-flache-solar-module-perfekt-fur-moderne-gebaude-sind',
        '/contact',
        '/quote',
        '/service',
        '/project',
        '/impressum',
        '/geschaftsbedingungen',
        '/Datenschutzerklarung',
        '/suche',
        


        // Add any other dynamic paths here if necessary
      ];
      return paths.map((path) => ({
        loc: path,
        lastmod: new Date().toISOString(), // Add the lastmod timestamp
      }));
    },
  };
  
