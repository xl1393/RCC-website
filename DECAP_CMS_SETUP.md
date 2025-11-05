# Decap CMS Setup Guide

This guide will help you set up Decap CMS for your website hosted on Vercel with GitHub as your codebase.

## What's Been Configured

I've set up Decap CMS to allow editing of the "About Us" page. The following files have been created:

1. **`public/admin/config.yml`** - Decap CMS configuration
2. **`public/admin/index.html`** - Admin interface
3. **`src/content/pages/about.md`** - About Us page content (managed by CMS)
4. **`src/content/config.ts`** - Astro content collection configuration
5. **`src/pages/about.astro`** - Updated to read from the markdown file

## Accessing the CMS

Once deployed, you can access the CMS at: `https://your-domain.com/admin`

## Authentication Setup

To enable GitHub authentication for Decap CMS on Vercel, follow these steps:

### Option 1: Use Netlify's Free OAuth Service (Recommended for Quick Setup)

1. **Create a Netlify Account** (if you don't have one)
   - Go to https://netlify.com and sign up for free

2. **Create a New Site on Netlify**
   - You don't need to deploy your site on Netlify
   - Just create a site (you can link it to your GitHub repo or create an empty site)

3. **Enable Identity Service**
   - In your Netlify site dashboard, go to **Settings > Identity**
   - Click **"Enable Identity"**

4. **Enable Git Gateway**
   - In Identity settings, scroll down to **"Services > Git Gateway"**
   - Click **"Enable Git Gateway"**
   - Connect it to your GitHub repository

5. **Configure External Providers**
   - In Identity settings, go to **"Registration preferences"**
   - Set registration to **"Invite only"** (for security)
   - Under **"External providers"**, enable GitHub authentication

6. **Update Your Config**
   - The current config is already set to use Netlify's auth endpoint
   - Make sure your deployed site includes this configuration

7. **Invite Users**
   - Go to Identity tab and invite yourself and others via email
   - They'll receive an email to set up their account

### Option 2: GitHub OAuth App with Vercel Serverless Functions

If you prefer to handle OAuth entirely on Vercel:

1. **Create a GitHub OAuth App**
   - Go to GitHub Settings > Developer settings > OAuth Apps
   - Click "New OAuth App"
   - Set:
     - Application name: `RCC Website CMS`
     - Homepage URL: `https://your-vercel-domain.com`
     - Authorization callback URL: `https://your-vercel-domain.com/api/callback`

2. **Set Up Serverless Functions**
   - You'll need to create serverless functions to handle OAuth
   - This requires additional setup with `@openlab/vercel-netlify-cms-github`

3. **Update Environment Variables in Vercel**
   - Add `OAUTH_GITHUB_CLIENT_ID`
   - Add `OAUTH_GITHUB_CLIENT_SECRET`

### Option 3: For Local Testing Only

For quick local testing without authentication:

1. Edit `public/admin/config.yml` and uncomment the test-repo backend:
   ```yaml
   backend:
     name: test-repo
   ```

2. Comment out the GitHub backend configuration

3. Run your dev server: `npm run dev`

4. Visit `http://localhost:4321/admin`

**Note:** The test-repo backend only works locally and won't save changes to GitHub.

## Using the CMS

1. Navigate to `https://your-domain.com/admin`
2. Log in with your GitHub account (after completing authentication setup)
3. Click on "Pages" in the sidebar
4. Click on "About Us"
5. Edit the content:
   - **Title**: Page title
   - **Description**: Meta description for SEO
   - **Body**: The main content (supports Markdown formatting)
6. Click "Save" and then "Publish" to commit changes to GitHub

## Deploy to Vercel

After completing these changes:

1. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Add Decap CMS configuration"
   git push origin main
   ```

2. Vercel will automatically deploy your changes

3. Once deployed, set up authentication using one of the options above

## Troubleshooting

- **Can't access /admin**: Make sure the `public/admin` folder is deployed
- **Authentication errors**: Double-check your OAuth app credentials
- **Changes not saving**: Verify your GitHub backend configuration in `config.yml`
- **Build errors**: Ensure all dependencies are installed (`npm install`)

## Adding More Pages to CMS

To add more pages to the CMS, edit `public/admin/config.yml` and add more files to the collections:

```yaml
collections:
  - name: "pages"
    label: "Pages"
    files:
      - label: "About Us"
        name: "about"
        file: "src/content/pages/about.md"
        fields:
          - { label: "Title", name: "title", widget: "string" }
          - { label: "Description", name: "description", widget: "string" }
          - { label: "Body", name: "body", widget: "markdown" }
      # Add more pages here
```
