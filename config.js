//config.js
/** TWITTER APP CONFIGURATION
 * consumer_key
 * consumer_secret
 * access_token
 * access_token_secret
 */
import * as dotenv from "dotenv";
var twitter = twit;
module.exports = {
    consumer_key: 'fp6PPryKc7j3BDoSzBQHGR6fP',
    consumer_secret: 'kSIYroe170aoDMiAQqSzB81G4D1ekMcU8vQ31pU0ym6leFpzb7',
    access_token: '867804862754553857-E6JoqN9QhAEzwD57G4YhIE2giyhYOmc',
    access_token_secret: 'jR5jwBSOYyLVWRodlXWSUb9PgML3ONc0KCCr28Z12O74V'
}

var Twitter = new twit(dotenv.config);