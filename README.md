# Deploy Next.js to Google Cloud Run

This is a Next.js template which can be deployed to [Google Cloud Run](https://cloud.google.com/run/docs).

## Deploying to Google Cloud Run

This template can be used to deploy your Next.js application as a Docker container.

1. Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) so you can use `gcloud` on the command line.
1. Run `gcloud auth login` to log in to your account.
1. [Create a new project](https://cloud.google.com/run/docs/quickstarts/build-and-deploy) in Google Cloud Run (e.g. `nextjs-docker`). Ensure billing is turned on.
1. Build your container image using Cloud Build: `gcloud builds submit --tag gcr.io/PROJECT-ID/helloworld --project PROJECT-ID`. This will also enable Cloud Build for your project.
1. Deploy to Cloud Run: `gcloud run deploy --image gcr.io/PROJECT-ID/helloworld --project PROJECT-ID --platform managed --allow-unauthenticated`. Choose a region of your choice.

   - You will be prompted for the service name: press Enter to accept the default name, `helloworld`.
   - You will be prompted for [region](https://cloud.google.com/run/docs/quickstarts/build-and-deploy#follow-cloud-run): select the region of your choice, for example `us-central1`.

For more information, see the Next.js [deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying#self-hosting).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
