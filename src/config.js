const DB_USER=process.env.DB_USER 
const DB_PASSWORD=process.env.DB_PASSWORD
const DB_NAME=process.env.DB_NAME
const DB_CLUSTER=process.env.DB_CLUSTER
const SECRET=process.env.SECRET  //CL28

module.exports = {
	'url' : `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
	SECRET
}
///////////////////firebase////////////////////
// export default {
//     mongodb: {
//       connectionString: "mongodb://localhost:27017/ecommerce", 
//     },
//     firebase:{
//       "type": "service_account",
//       "project_id": "ecommerce-node-88105",
//       "private_key_id": "ce14a5950b73fe3894718cbade9d953972183e89",
//       "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCgk26Bcx1dD/0/\nSN9YlSlV7R+m28TjH1b7lq++GslXrm6MefJ04xiHXB72+hQGLz1PdEg5w49i/GEQ\nPVZKLRAyaS4P1OHWqR21bNsewXumvS1dVXr/eq+x/Yw49o9mFaaRrWLIcUcNKig4\nWMi2GZzsB3jJAnrKvrmJQxO4vWM8xhYij0PlDt7OOx2ZdcE0bwvTrNrtwCsQQhfs\nfJXTQuzPPxIvJzo+Dop7U7+ifatUq423ouNx21TTpIrnfFtJMDmN/1BRq7yVLX7d\nYXCJZp09uE6gfP3lt79olQ599YUMBzzH59emfQuWOqPH0DZpaZwyRvYobeGVq9zz\nwvZvVPTDAgMBAAECggEAMXBzK6QXvFl57YwwSAPU8EHL5wHvQsaZb2jbvzpcF4T7\nQIEjZ12sZbC1T/F7TNQqmlYBDtfpQ97Uu71G3hu1yu+bYQB4cDEtlnhnlraXraS9\nXOk+r35ErhaUn806JYIxANVTfsdxytnZ/E9JrNeB+yHpzGnZCKdkVKC0Z8LX1RPj\nTgTMXng7aUqYNERVOXYW/fEwy1DSTDG7P966hvh8OkRKH19584J3bQAaXR6yziI6\nEHbqnnZM9Ocr37NpHKxu7pwkEc8WxyLfrh2pK7pT/a6FgKTsYRV5TVdarRYymPcy\nQ1bc2Skq9KYwkwi3l6vY50cqpgwYaQTo3so9sikgoQKBgQDMgrHNA8M0pIKnBihb\nx1YXko0YKWex4EAPo3rtEfRQTnjGKzXfkNmXT6ZvvC91i3lDMm/rDwuqm3GlnYU5\n8bCx4XM8bABpdp4ngGkVcE7SFaPQvS0WHhPN+dV2FyohKIrYkxsQCQAG2g3m3Pht\n+aUdIT5CiJc+FdHqVf1z1wVuqwKBgQDJAQV/+So/mPX6AK794HUH/r4wEo29Ge6a\nUY7Ph9jcKENPfvY8EBWtUoFlwbPVqHNfknUU45lLon1VaAR3fGxgoqM8WB4PKhwO\nWWAYMa/W1BxEP5eziMpazRtMHwZ3G4PCfWgRObEIuJubiOhYJqV02hKZOEbp34vF\ndD7K4YEySQKBgHPaXersBLtfrnv76wUDCWxVIwTa/9kuVlwFmm+OSj7sFVL9y4kY\nv4sOHhUSIDiQiGNewTQB0/QUFu9hKsXGevhp5SQHcrxL7BAomF8CvkQY6jIn2NC8\nvS9kJl69hKpAE1fZDe2pi5BWGqX76+gxEi5MVL7QLg2HwuDjUa870eH9AoGARvor\nXQM5Hff/c+Zl5JQr/0S/F+6VSl8r2CZQjYvk0ekNy7aDcLYlUWy+8JWz0RCInQj0\newnbic+4/j2axi6TfpQvnBFpm+U8vvxkaGazNuLzkE38XZNCEUo4B2s1Nz3qCvWJ\nl/uNPg0iNYvkr6wF5PtUcfJjaBZeHr1rpux2WLECgYEAu6b0iqAN5b+YBc8ns1TB\nqGObl4ijaGry+vYhg0fi4jT4cbHArBl6GcHEv0BGSJ5wr4V2qhOn8BChGhfNBKZR\no94e1/JqvbPIjX291ynTU3yho1/S/f6QacbGIKJgJfjThZE+JgGT9lJ6IXukg24U\nw+f58TuYfiBRF0//6vCGqrg=\n-----END PRIVATE KEY-----\n",
//       "client_email": "firebase-adminsdk-am0s0@ecommerce-node-88105.iam.gserviceaccount.com",
//       "client_id": "116650253512177996183",
//       "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//       "token_uri": "https://oauth2.googleapis.com/token",
//       "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//       "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-am0s0%40ecommerce-node-88105.iam.gserviceaccount.com"
//     },
//   };