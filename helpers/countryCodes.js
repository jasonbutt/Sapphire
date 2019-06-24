export const popularCountries = [
  'ar',
  'au',
  'at',
  'kh',
  'cl',
  'ca',
  'cn',
  'fr',
  'de',
  'jp',
  'la',
  'my',
  'is',
  'kr',
  'mx',
  'nl',
  'ph',
  'pl',
  'za',
  'ru',
  'ro',
  'ch',
  'tw',
  'tr',
  'gb',
  'us',
  'vn',
  'co',
  'ma',
  'nz',
  'es',
  'pt',
  'th',
  'in',
  'lk',
  'ec',
  'br',
  'no',
  'bg',
];

export const randomCountry =
  popularCountries[Math.floor(Math.random() * popularCountries.length)];

// https://en.wikipedia.org/wiki/List_of_ISO_3166_countryCodes
const countries = [
  { alpha2: 'af', name: 'Afghanistan', slug: 'afghanistan' },
  { alpha2: 'ax', name: 'Åland Islands', slug: 'aland-islands' },
  { alpha2: 'al', name: 'Albania', slug: 'albania' },
  { alpha2: 'dz', name: 'Algeria', slug: 'algeria' },
  { alpha2: 'as', name: 'American Samoa', slug: 'american-samoa' },
  { alpha2: 'ad', name: 'Andorra', slug: 'andorra' },
  { alpha2: 'ao', name: 'Angola', slug: 'angola' },
  { alpha2: 'ai', name: 'Anguilla', slug: 'anguilla' },
  { alpha2: 'aq', name: 'Antarctica', slug: 'antarctica' },
  { alpha2: 'ag', name: 'Antigua and Barbuda', slug: 'antigua-and-barbuda' },
  { alpha2: 'ar', name: 'Argentina', slug: 'argentina' },
  { alpha2: 'am', name: 'Armenia', slug: 'armenia' },
  { alpha2: 'aw', name: 'Aruba', slug: 'aruba' },
  { alpha2: 'au', name: 'Australia', slug: 'australia' },
  { alpha2: 'at', name: 'Austria', slug: 'austria' },
  { alpha2: 'az', name: 'Azerbaijan', slug: 'azerbaijan' },
  { alpha2: 'bs', name: 'Bahamas', slug: 'bahamas' },
  { alpha2: 'bh', name: 'Bahrain', slug: 'bahrain' },
  { alpha2: 'bd', name: 'Bangladesh', slug: 'bangladesh' },
  { alpha2: 'bb', name: 'Barbados', slug: 'barbados' },
  { alpha2: 'by', name: 'Belarus', slug: 'belarus' },
  { alpha2: 'be', name: 'Belgium', slug: 'belgium' },
  { alpha2: 'bz', name: 'Belize', slug: 'belize' },
  { alpha2: 'bj', name: 'Benin', slug: 'benin' },
  { alpha2: 'bm', name: 'Bermuda', slug: 'bermuda' },
  { alpha2: 'bt', name: 'Bhutan', slug: 'bhutan' },
  { alpha2: 'bo', name: 'Bolivia', slug: 'bolivia' },
  {
    alpha2: 'bq',
    name: 'Caribbean Netherlands',
    slug: 'caribbean-netherlands',
  },
  {
    alpha2: 'ba',
    name: 'Bosnia and Herzegovina',
    slug: 'bosnia-and-herzegovina',
  },
  { alpha2: 'bw', name: 'Botswana', slug: 'botswana' },
  { alpha2: 'bv', name: 'Bouvet Island', slug: 'bouvet-island' },
  { alpha2: 'br', name: 'Brazil', slug: 'brazil' },
  {
    alpha2: 'io',
    name: 'British Indian Ocean Territory',
    slug: 'british-indian-ocean-territory',
  },
  { alpha2: 'bn', name: 'Brunei Darussalam', slug: 'brunei-darussalam' },
  { alpha2: 'bg', name: 'Bulgaria', slug: 'bulgaria' },
  { alpha2: 'bf', name: 'Burkina Faso', slug: 'burkina-faso' },
  { alpha2: 'bi', name: 'Burundi', slug: 'burundi' },
  { alpha2: 'cv', name: 'Cabo Verde', slug: 'cabo-verde' },
  { alpha2: 'kh', name: 'Cambodia', slug: 'cambodia' },
  { alpha2: 'cm', name: 'Cameroon', slug: 'cameroon' },
  { alpha2: 'ca', name: 'Canada', slug: 'canada' },
  { alpha2: 'ky', name: 'Cayman Islands', slug: 'cayman-islands' },
  {
    alpha2: 'cf',
    name: 'Central African Republic',
    slug: 'central-african-republic',
  },
  { alpha2: 'td', name: 'Chad', slug: 'chad' },
  { alpha2: 'cl', name: 'Chile', slug: 'chile' },
  { alpha2: 'cn', name: 'China', slug: 'china' },
  { alpha2: 'cx', name: 'Christmas Island', slug: 'christmas-island' },
  { alpha2: 'cc', name: 'Cocos Islands', slug: 'cocos-islands' },
  { alpha2: 'co', name: 'Colombia', slug: 'colombia' },
  { alpha2: 'km', name: 'Comoros', slug: 'comoros' },
  { alpha2: 'cg', name: 'Congo', slug: 'congo' },
  {
    alpha2: 'cd',
    name: 'Democratic Republic of Congo',
    slug: 'democratic-republic-of-congo',
  },
  { alpha2: 'ck', name: 'Cook Islands', slug: 'cook-islands' },
  { alpha2: 'cr', name: 'Costa Rica', slug: 'costa-rica' },
  { alpha2: 'ci', name: "Côte d'Ivoire", slug: 'cote-divoire' },
  { alpha2: 'hr', name: 'Croatia', slug: 'croatia' },
  { alpha2: 'cu', name: 'Cuba', slug: 'cuba' },
  { alpha2: 'cw', name: 'Curaçao', slug: 'curaçao' },
  { alpha2: 'cy', name: 'Cyprus', slug: 'cyprus' },
  { alpha2: 'cz', name: 'Czechia', slug: 'czechia' },
  { alpha2: 'dk', name: 'Denmark', slug: 'denmark' },
  { alpha2: 'dj', name: 'Djibouti', slug: 'djibouti' },
  { alpha2: 'dm', name: 'Dominica', slug: 'dominica' },
  { alpha2: 'do', name: 'Dominican Republic', slug: 'dominican-republic' },
  { alpha2: 'ec', name: 'Ecuador', slug: 'ecuador' },
  { alpha2: 'eg', name: 'Egypt', slug: 'egypt' },
  { alpha2: 'sv', name: 'El Salvador', slug: 'el-salvador' },
  { alpha2: 'gq', name: 'Equatorial Guinea', slug: 'equatorial-guinea' },
  { alpha2: 'er', name: 'Eritrea', slug: 'eritrea' },
  { alpha2: 'ee', name: 'Estonia', slug: 'estonia' },
  { alpha2: 'et', name: 'Ethiopia', slug: 'ethiopia' },
  { alpha2: 'fk', name: 'Falkland Islands', slug: 'falkland-islands' },
  { alpha2: 'fo', name: 'Faroe Islands', slug: 'faroe-islands' },
  { alpha2: 'fj', name: 'Fiji', slug: 'fiji' },
  { alpha2: 'fi', name: 'Finland', slug: 'finland' },
  { alpha2: 'fr', name: 'France', slug: 'france' },
  { alpha2: 'gf', name: 'French Guiana', slug: 'french-guiana' },
  { alpha2: 'pf', name: 'French Polynesia', slug: 'french-polynesia' },
  {
    alpha2: 'tf',
    name: 'French Southern Territories',
    slug: 'french-southern-territories',
  },
  { alpha2: 'ga', name: 'Gabon', slug: 'gabon' },
  { alpha2: 'gm', name: 'Gambia', slug: 'gambia' },
  { alpha2: 'ge', name: 'Georgia', slug: 'georgia' },
  { alpha2: 'de', name: 'Germany', slug: 'germany' },
  { alpha2: 'gh', name: 'Ghana', slug: 'ghana' },
  { alpha2: 'gi', name: 'Gibraltar', slug: 'gibraltar' },
  { alpha2: 'gr', name: 'Greece', slug: 'greece' },
  { alpha2: 'gl', name: 'Greenland', slug: 'greenland' },
  { alpha2: 'gd', name: 'Grenada', slug: 'grenada' },
  { alpha2: 'gp', name: 'Guadeloupe', slug: 'guadeloupe' },
  { alpha2: 'gu', name: 'Guam', slug: 'guam' },
  { alpha2: 'gt', name: 'Guatemala', slug: 'guatemala' },
  { alpha2: 'gg', name: 'Guernsey', slug: 'guernsey' },
  { alpha2: 'gn', name: 'Guinea', slug: 'guinea' },
  { alpha2: 'gw', name: 'Guinea-Bissau', slug: 'guinea-bissau' },
  { alpha2: 'gy', name: 'Guyana', slug: 'guyana' },
  { alpha2: 'ht', name: 'Haiti', slug: 'haiti' },
  {
    alpha2: 'hm',
    name: 'Heard Island and McDonald Islands',
    slug: 'heard-island-and-mcdonald-islands',
  },
  { alpha2: 'va', name: 'Vatican City', slug: 'vatican-city' },
  { alpha2: 'hn', name: 'Honduras', slug: 'honduras' },
  { alpha2: 'hk', name: 'Hong Kong', slug: 'hong-kong' },
  { alpha2: 'hu', name: 'Hungary', slug: 'hungary' },
  { alpha2: 'is', name: 'Iceland', slug: 'iceland' },
  { alpha2: 'in', name: 'India', slug: 'india' },
  { alpha2: 'id', name: 'Indonesia', slug: 'indonesia' },
  { alpha2: 'ir', name: 'Iran', slug: 'iran' },
  { alpha2: 'iq', name: 'Iraq', slug: 'iraq' },
  { alpha2: 'ie', name: 'Ireland', slug: 'ireland' },
  { alpha2: 'im', name: 'Isle of Man', slug: 'isle-of-man' },
  { alpha2: 'il', name: 'Israel', slug: 'israel' },
  { alpha2: 'it', name: 'Italy', slug: 'italy' },
  { alpha2: 'jm', name: 'Jamaica', slug: 'jamaica' },
  { alpha2: 'jp', name: 'Japan', slug: 'japan' },
  { alpha2: 'je', name: 'Jersey', slug: 'jersey' },
  { alpha2: 'jo', name: 'Jordan', slug: 'jordan' },
  { alpha2: 'kz', name: 'Kazakhstan', slug: 'kazakhstan' },
  { alpha2: 'ke', name: 'Kenya', slug: 'kenya' },
  { alpha2: 'ki', name: 'Kiribati', slug: 'kiribati' },
  { alpha2: 'kp', name: 'North Korea', slug: 'north-korea' },
  { alpha2: 'kr', name: 'South Korea', slug: 'south-korea' },
  { alpha2: 'kw', name: 'Kuwait', slug: 'kuwait' },
  { alpha2: 'kg', name: 'Kyrgyzstan', slug: 'kyrgyzstan' },
  { alpha2: 'la', name: 'Laos', slug: 'laos' },
  { alpha2: 'lv', name: 'Latvia', slug: 'latvia' },
  { alpha2: 'lb', name: 'Lebanon', slug: 'lebanon' },
  { alpha2: 'ls', name: 'Lesotho', slug: 'lesotho' },
  { alpha2: 'lr', name: 'Liberia', slug: 'liberia' },
  { alpha2: 'ly', name: 'Libya', slug: 'libya' },
  { alpha2: 'li', name: 'Liechtenstein', slug: 'liechtenstein' },
  { alpha2: 'lt', name: 'Lithuania', slug: 'lithuania' },
  { alpha2: 'lu', name: 'Luxembourg', slug: 'luxembourg' },
  { alpha2: 'mo', name: 'Macao', slug: 'macao' },
  { alpha2: 'mk', name: 'Macedonia', slug: 'macedonia' },
  { alpha2: 'mg', name: 'Madagascar', slug: 'madagascar' },
  { alpha2: 'mw', name: 'Malawi', slug: 'malawi' },
  { alpha2: 'my', name: 'Malaysia', slug: 'malaysia' },
  { alpha2: 'mv', name: 'Maldives', slug: 'maldives' },
  { alpha2: 'ml', name: 'Mali', slug: 'mali' },
  { alpha2: 'mt', name: 'Malta', slug: 'malta' },
  { alpha2: 'mh', name: 'Marshall Islands', slug: 'marshall-islands' },
  { alpha2: 'mq', name: 'Martinique', slug: 'martinique' },
  { alpha2: 'mr', name: 'Mauritania', slug: 'mauritania' },
  { alpha2: 'mu', name: 'Mauritius', slug: 'mauritius' },
  { alpha2: 'yt', name: 'Mayotte', slug: 'mayotte' },
  { alpha2: 'mx', name: 'Mexico', slug: 'mexico' },
  { alpha2: 'fm', name: 'Micronesia', slug: 'micronesia' },
  { alpha2: 'md', name: 'Moldova', slug: 'moldova' },
  { alpha2: 'mc', name: 'Monaco', slug: 'monaco' },
  { alpha2: 'mn', name: 'Mongolia', slug: 'mongolia' },
  { alpha2: 'me', name: 'Montenegro', slug: 'montenegro' },
  { alpha2: 'ms', name: 'Montserrat', slug: 'montserrat' },
  { alpha2: 'ma', name: 'Morocco', slug: 'morocco' },
  { alpha2: 'mz', name: 'Mozambique', slug: 'mozambique' },
  { alpha2: 'mm', name: 'Myanmar', slug: 'myanmar' },
  { alpha2: 'na', name: 'Namibia', slug: 'namibia' },
  { alpha2: 'nr', name: 'Nauru', slug: 'nauru' },
  { alpha2: 'np', name: 'Nepal', slug: 'nepal' },
  { alpha2: 'nl', name: 'Netherlands', slug: 'netherlands' },
  { alpha2: 'nc', name: 'New Caledonia', slug: 'new-caledonia' },
  { alpha2: 'nz', name: 'New Zealand', slug: 'new-zealand' },
  { alpha2: 'ni', name: 'Nicaragua', slug: 'nicaragua' },
  { alpha2: 'ne', name: 'Niger', slug: 'niger' },
  { alpha2: 'ng', name: 'Nigeria', slug: 'nigeria' },
  { alpha2: 'nu', name: 'Niue', slug: 'niue' },
  { alpha2: 'nf', name: 'Norfolk Island', slug: 'norfolk-island' },
  {
    alpha2: 'mp',
    name: 'Northern Mariana Islands',
    slug: 'northern-mariana-islands',
  },
  { alpha2: 'no', name: 'Norway', slug: 'norway' },
  { alpha2: 'om', name: 'Oman', slug: 'oman' },
  { alpha2: 'pk', name: 'Pakistan', slug: 'pakistan' },
  { alpha2: 'pw', name: 'Palau', slug: 'palau' },
  { alpha2: 'ps', name: 'Palestine', slug: 'palestine' },
  { alpha2: 'pa', name: 'Panama', slug: 'panama' },
  { alpha2: 'pg', name: 'Papua New Guinea', slug: 'papua-new-guinea' },
  { alpha2: 'py', name: 'Paraguay', slug: 'paraguay' },
  { alpha2: 'pe', name: 'Peru', slug: 'peru' },
  { alpha2: 'ph', name: 'Philippines', slug: 'philippines' },
  { alpha2: 'pn', name: 'Pitcairn', slug: 'pitcairn' },
  { alpha2: 'pl', name: 'Poland', slug: 'poland' },
  { alpha2: 'pt', name: 'Portugal', slug: 'portugal' },
  { alpha2: 'pr', name: 'Puerto Rico', slug: 'puerto-rico' },
  { alpha2: 'qa', name: 'Qatar', slug: 'qatar' },
  { alpha2: 're', name: 'Réunion', slug: 'reunion' },
  { alpha2: 'ro', name: 'Romania', slug: 'romania' },
  { alpha2: 'ru', name: 'Russia', slug: 'russia' },
  { alpha2: 'rw', name: 'Rwanda', slug: 'rwanda' },
  { alpha2: 'bl', name: 'Saint Barthélemy', slug: 'saint-barthelemy' },
  {
    alpha2: 'sh',
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    slug: 'saint-helena-ascension-and-tristan-da-cunha',
  },
  {
    alpha2: 'kn',
    name: 'Saint Kitts and Nevis',
    slug: 'saint-kitts-and-nevis',
  },
  { alpha2: 'lc', name: 'Saint Lucia', slug: 'saint-lucia' },
  { alpha2: 'mf', name: 'Saint Martin', slug: 'saint-martin' },
  {
    alpha2: 'pm',
    name: 'Saint Pierre and Miquelon',
    slug: 'saint-pierre-and-miquelon',
  },
  {
    alpha2: 'vc',
    name: 'Saint Vincent and the Grenadines',
    slug: 'saint-vincent-and-the-grenadines',
  },
  { alpha2: 'ws', name: 'Samoa', slug: 'samoa' },
  { alpha2: 'sm', name: 'San Marino', slug: 'san-marino' },
  {
    alpha2: 'st',
    name: 'Sao Tome and Principe',
    slug: 'sao-tome-and-principe',
  },
  { alpha2: 'sa', name: 'Saudi Arabia', slug: 'saudi-arabia' },
  { alpha2: 'sn', name: 'Senegal', slug: 'senegal' },
  { alpha2: 'rs', name: 'Serbia', slug: 'serbia' },
  { alpha2: 'sc', name: 'Seychelles', slug: 'seychelles' },
  { alpha2: 'sl', name: 'Sierra Leone', slug: 'sierra-leone' },
  { alpha2: 'sg', name: 'Singapore', slug: 'singapore' },
  { alpha2: 'sx', name: 'Sint Maarten', slug: 'sint-maarten' },
  { alpha2: 'sk', name: 'Slovakia', slug: 'slovakia' },
  { alpha2: 'si', name: 'Slovenia', slug: 'slovenia' },
  { alpha2: 'sb', name: 'Solomon Islands', slug: 'solomon-islands' },
  { alpha2: 'so', name: 'Somalia', slug: 'somalia' },
  { alpha2: 'za', name: 'South Africa', slug: 'south-africa' },
  {
    alpha2: 'gs',
    name: 'South Georgia and the South Sandwich Islands',
    slug: 'south-georgia-and-the-south-sandwich-islands',
  },
  { alpha2: 'ss', name: 'South Sudan', slug: 'south-sudan' },
  { alpha2: 'es', name: 'Spain', slug: 'spain' },
  { alpha2: 'lk', name: 'Sri Lanka', slug: 'sri-lanka' },
  { alpha2: 'sd', name: 'Sudan', slug: 'sudan' },
  { alpha2: 'sr', name: 'Suriname', slug: 'suriname' },
  {
    alpha2: 'sj',
    name: 'Svalbard and Jan Mayen',
    slug: 'svalbard-and-jan-mayen',
  },
  { alpha2: 'sz', name: 'Eswatini', slug: 'eswatini' },
  { alpha2: 'se', name: 'Sweden', slug: 'sweden' },
  { alpha2: 'ch', name: 'Switzerland', slug: 'switzerland' },
  { alpha2: 'sy', name: 'Syria', slug: 'syria' },
  { alpha2: 'tw', name: 'Taiwan', slug: 'taiwan' },
  { alpha2: 'tj', name: 'Tajikistan', slug: 'tajikistan' },
  { alpha2: 'tz', name: 'Tanzania', slug: 'tanzania' },
  { alpha2: 'th', name: 'Thailand', slug: 'thailand' },
  { alpha2: 'tl', name: 'Timor-Leste', slug: 'timor-leste' },
  { alpha2: 'tg', name: 'Togo', slug: 'togo' },
  { alpha2: 'tk', name: 'Tokelau', slug: 'tokelau' },
  { alpha2: 'to', name: 'Tonga', slug: 'tonga' },
  { alpha2: 'tt', name: 'Trinidad and Tobago', slug: 'trinidad-and-tobago' },
  { alpha2: 'tn', name: 'Tunisia', slug: 'tunisia' },
  { alpha2: 'tr', name: 'Turkey', slug: 'turkey' },
  { alpha2: 'tm', name: 'Turkmenistan', slug: 'turkmenistan' },
  {
    alpha2: 'tc',
    name: 'Turks and Caicos Islands',
    slug: 'turks-and-caicos-islands',
  },
  { alpha2: 'tv', name: 'Tuvalu', slug: 'tuvalu' },
  { alpha2: 'ug', name: 'Uganda', slug: 'uganda' },
  { alpha2: 'ua', name: 'Ukraine', slug: 'ukraine' },
  { alpha2: 'ae', name: 'United Arab Emirates', slug: 'united-arab-emirates' },
  { alpha2: 'gb', name: 'United Kingdom', slug: 'united-kingdom' },
  { alpha2: 'us', name: 'United States', slug: 'united-states' },
  { alpha2: 'um', name: 'United States', slug: 'united-states' },
  { alpha2: 'uy', name: 'Uruguay', slug: 'uruguay' },
  { alpha2: 'uz', name: 'Uzbekistan', slug: 'uzbekistan' },
  { alpha2: 'vu', name: 'Vanuatu', slug: 'vanuatu' },
  { alpha2: 've', name: 'Venezuela', slug: 'venezuela' },
  { alpha2: 'vn', name: 'Vietnam', slug: 'vietnam' },
  {
    alpha2: 'vg',
    name: 'British Virgin Islands',
    slug: 'british-virgin-islands',
  },
  { alpha2: 'vi', name: 'US Virgin Islands', slug: 'us-virgin-islands' },
  { alpha2: 'wf', name: 'Wallis and Futuna', slug: 'wallis-and-futuna' },
  { alpha2: 'eh', name: 'Western Sahara', slug: 'western-sahara' },
  { alpha2: 'ye', name: 'Yemen', slug: 'yemen' },
  { alpha2: 'zm', name: 'Zambia', slug: 'zambia' },
  { alpha2: 'zw', name: 'Zimbabwe', slug: 'zimbabwe' },
];

export const featuredCcEurope = [
  'at',
  'ch',
  'fr',
  'de',
  'is',
  'pl',
  'ru',
  'nl',
  'no',
  'ro',
  'es',
  'gb',
];

export const featuredCcAsia = [
  'cn',
  'in',
  'jp',
  'my',
  'ph',
  'np',
  'lk',
  'kr',
  'th',
  'tr',
  'tw',
  'vn',
];

export const featuredCcWorld = [
  'au',
  'nz',
  'ca',
  'us',
  'mx',
  'co',
  'pe',
  'cl',
  'br',
  'ar',
  'ma',
  'za',
];

export const featuredPlacesEurope = [
  {
    countrySlug: 'spain',
    subdivision: 'Community of Madrid',
    city: 'Madrid',
  },
  {
    countrySlug: 'spain',
    subdivision: 'Catalonia',
    city: 'Barcelona',
  },
  {
    countrySlug: 'spain',
    subdivision: 'Valencian Community',
    city: 'Valencia',
  },
  {
    countrySlug: 'portugal',
    subdivision: 'Área Metropolitana de Lisboa',
    city: 'Lisbon',
  },
  {
    countrySlug: 'italy',
    subdivision: 'Lazio',
    city: 'Rome',
  },
  {
    countrySlug: 'germany',
    subdivision: 'Bavaria',
    city: 'Munich',
  },
  {
    countrySlug: 'united-kingdom',
    subdivision: 'England',
    city: 'London',
  },
  {
    countrySlug: 'ireland',
    subdivision: 'Leinster',
    city: 'Dublin',
  },
  {
    countrySlug: 'poland',
    subdivision: 'Lesser Poland Voivodeship',
    city: 'Krakow',
  },
  {
    countrySlug: 'france',
    subdivision: 'Ile-de-France',
    city: 'Paris',
  },
  {
    countrySlug: 'austria',
    subdivision: 'Vienna',
    city: 'Vienna',
    nocity: true,
  },
  {
    countrySlug: 'netherlands',
    subdivision: 'North Holland',
    city: 'Amsterdam',
  },
];
export const featuredPlacesAsia = [
  {
    countrySlug: 'singapore',
    city: 'Singapore',
    nocity: true,
    nosubdivision: true,
  },
  {
    countrySlug: 'malaysia',
    subdivision: 'Kuala Lumpur',
    city: 'Kuala Lumpur',
    nocity: true,
  },
  {
    countrySlug: 'malaysia',
    subdivision: 'Penang',
    city: 'Penang',
    nocity: true,
  },
  {
    countrySlug: 'indonesia',
    subdivision: 'Bali',
    city: 'Bali',
    nocity: true,
  },

  {
    countrySlug: 'thailand',
    subdivision: 'Bangkok',
    city: 'Bangkok',
    nocity: true,
  },
  {
    countrySlug: 'taiwan',
    subdivision: 'Taipei',
    city: 'Taipei',
    nocity: true,
  },
  {
    countrySlug: 'china',
    subdivision: 'Beijing',
    city: 'Beijing',
    nocity: true,
  },
  {
    countrySlug: 'turkey',
    subdivision: 'Marmara Region',
    city: 'Istanbul',
  },
  {
    countrySlug: 'philippines',
    subdivision: 'Cebu',
    city: 'Cebu',
    nocity: true,
  },

  {
    countrySlug: 'japan',
    subdivision: 'Tokyo',
    city: 'Tokyo',
    nocity: true,
  },

  {
    countrySlug: 'japan',
    subdivision: 'Kinki Region',
    city: 'Kyoto',
  },

  {
    countrySlug: 'united-arab-emirates',
    subdivision: 'Dubai',
    city: 'Dubai',
    nocity: true,
  },
];
export const featuredPlacesWorld = [
  {
    countrySlug: 'united-states',
    subdivision: 'California',
    city: 'San Francisco',
  },
  {
    countrySlug: 'united-states',
    subdivision: 'Illinois',
    city: 'Chicago',
  },
  {
    countrySlug: 'morocco',
    subdivision: 'Marrakech-Safi',
    city: 'Marrakesh',
  },
  {
    countrySlug: 'united-states',
    subdivision: 'California',
    city: 'California',
    nocity: true,
  },
  {
    countrySlug: 'united-states',
    subdivision: 'New York',
    city: 'New York City',
  },
  {
    countrySlug: 'united-states',
    subdivision: 'Hawaii',
    city: 'Hawaii',
    nocity: true,
  },
  {
    countrySlug: 'peru',
    subdivision: 'Cusco',
    city: 'Cusco',
  },
  {
    countrySlug: 'mexico',
    subdivision: 'Yucatán',
    city: 'Yucatan',
    nocity: true,
  },
  {
    countrySlug: 'ecuador',
    subdivision: 'Galápagos',
    city: 'Galápagos',
    nocity: true,
  },
  {
    countrySlug: 'argentina',
    subdivision: 'Autonomous City of Buenos Aires',
    city: 'Buenos Aires',
    nocity: true,
  },
  {
    countrySlug: 'canada',
    subdivision: 'Ontario',
    city: 'Toronto',
  },
  {
    countrySlug: 'australia',
    subdivision: 'New South Wales',
    city: 'Sydney',
  },
];

export const nameFromCC = cc => {
  return countries.find(country => country.alpha2 === cc)
    ? countries.find(country => country.alpha2 === cc).name
    : undefined;
};

export const slugFromCC = cc => {
  return countries.find(country => country.alpha2 === cc)
    ? countries.find(country => country.alpha2 === cc).slug
    : undefined;
};

export const ccFromSlug = cc => {
  return countries.find(country => country.slug === cc)
    ? countries.find(country => country.slug === cc).alpha2
    : undefined;
};

export const nameFromSlug = cc => {
  return countries.find(country => country.slug === cc)
    ? countries.find(country => country.slug === cc).name
    : '';
};
