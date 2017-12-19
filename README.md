# Realty Test Site

Make sure you have your environment variables set. You can use a dotenv (.env) file. Allowed variables: `COOKIE_SECRET`, `CLOUDINARY_URL`, and `MONGO_URI`.

Defaults to the standard, local MongoDB URI. If you have a remote instance, or the port is different, make sure to set the `MONGO_URI` environment variable.

To run:
`npm install && node keystone`
