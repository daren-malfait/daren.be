module.exports = {
  siteTitle: 'Daren Malfait', // Navigation and Site Title
  siteTitleAlt: 'Daren webdeveloper', // Alternative Site title for SEO
  siteTitleShort: 'Daren Malfait', // short_name for manifest
  siteUrl: process.env.ROOT_URL || 'http://daren.be', // Domain of your site. No trailing slash!
  lang: 'nl', // Language Tag on <html> element
  pathPrefix: '/',
  siteLogo: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription:
    'Kijk hoe Daren jouw website naar een volgend niveau kan brengen.',
  email: 'me@daren.be',
  author: 'Daren Malfait', // Author for schemaORGJSONLD
  organization: 'Daren',

  // siteFBAppID: '', // Facebook App ID - Optional
  siteGAID: '', // Google analytics ID - Optional

  // Manifest and Progress color
  themeColor: '#111111',
  backgroundColor: '#ffffff',
};
