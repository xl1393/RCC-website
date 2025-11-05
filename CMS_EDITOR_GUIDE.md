# Website Content Editing Guide
**NYC-MEHSJ Research Capacity Core (RCC) Website**

This guide will help you edit content on the RCC website using our Content Management System (CMS).

---

## Getting Started

### Step 1: Get Access

**Option A: Use Your Own GitHub Account (Recommended)**
- If you have a GitHub account, email your GitHub username to [site administrator]
- You'll be added to the repository and can use your own account
- This allows us to track who made which changes

**Option B: Use the Shared Account**
- If you don't have a GitHub account, you can use our shared credentials:
  - Go to https://github.com and click "Sign in"
  - **Email**: rcc.cuny@gmail.com
  - **Password**: rcc12345
  - Click "Sign in with Google" and use these credentials

---

## Accessing the CMS

1. **Open your web browser** and go to:
   ```
   https://rcc-website-five.vercel.app/admin
   ```

2. **Click "Login with GitHub"**

3. **Authorize the application** (first time only)
   - GitHub will ask you to authorize "RCC Website CMS"
   - Click "Authorize" to grant access

4. **You're in!** You should now see the CMS dashboard

---

## What You Can Edit

The CMS allows you to edit three types of content:

### 1. **Pages** (2 pages)
- **Home Page** - Edit the welcome message, subtitle, and button links
- **About Us** - Edit the about us content

### 2. **Skills Pages** (7 pages)
- Research Technology Marketplace
- The Principles and Practice Workshops
- Research Strategy and Experimental Design
- Bioinformatics and Analytics Support
- Artificial Intelligence for Research and Health
- Community Participation in Research and Clinical Trials
- Center Membership – Benefits, Responsibilities, and Process

### 3. **Blog Posts**
- View, edit, create, or delete blog posts

**Note**: The Resources page is NOT editable through the CMS. Contact the site administrator if you need to change it.

---

## How to Edit Content

### Editing a Page

1. **From the CMS dashboard**, click on a collection in the left sidebar:
   - Click **"Pages"** for Home or About Us
   - Click **"Skills Pages"** for any skills page
   - Click **"Blog Posts"** for blog content

2. **Select the item** you want to edit from the list

3. **Make your changes** in the editor:
   - Text fields can be edited directly
   - For markdown fields (marked with "Body" or "Content"), you can:
     - Use the **Rich Text** tab for easier editing (bold, italic, lists, etc.)
     - Or use the **Markdown** tab if you know markdown syntax

4. **Preview your changes** (optional):
   - Your changes appear in the preview on the right side
   - This shows how it will look on the website

5. **Save your changes**:
   - Click the **"Save"** button (top right)
   - Your changes are saved as a draft

6. **Publish your changes**:
   - Click **"Publish"** (next to Save button)
   - Or click the **Status dropdown** → **"Set status to Ready"** → **"Publish"**
   - This makes your changes live on the website

### Creating a New Blog Post

1. Click **"Blog Posts"** in the left sidebar
2. Click **"New Blog Posts"** button
3. Fill in all fields:
   - **Title**: The blog post title
   - **Description**: A short summary
   - **Publish Date**: When the post was/will be published
   - **Hero Image** (optional): Upload a featured image
   - **Tags** (optional): Add relevant tags
   - **Category** (optional): Assign a category
   - **Author** (optional): Your name
   - **Body**: The main content of your post
4. Click **"Save"** then **"Publish"**

### Deleting a Blog Post

1. Open the blog post you want to delete
2. Click **"Delete entry"** (usually in the top menu or settings)
3. Confirm the deletion
4. The post will be removed from the website after the next deployment

---

## Understanding Markdown

For content fields that use Markdown, here are some basics:

### Basic Formatting
```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2

[Link text](https://example.com)

![Image description](image-url.jpg)
```

**Tip**: If you're not comfortable with markdown, use the "Rich Text" editor tab instead!

---

## What Happens After You Publish?

When you click **"Publish"**:

1. ✅ Your changes are saved to GitHub (version control)
2. ✅ The website automatically rebuilds (takes 2-3 minutes)
3. ✅ Your changes appear on the live website at: https://rcc-website-five.vercel.app

**Important**:
- Changes are **NOT instant** - allow 2-3 minutes for the site to rebuild
- You'll receive an email if the deployment fails (rare)
- All changes are tracked, so mistakes can be undone if needed

---

## Tips for Success

### ✅ DO:
- **Preview before publishing** - Check your changes look correct
- **Save often** - Click "Save" to keep drafts of your work
- **Be descriptive** - Use clear, readable text
- **Check links** - Make sure all links work after publishing
- **Use proper formatting** - Use headings, lists, and paragraphs appropriately

### ❌ DON'T:
- **Don't delete fields** - Only edit the content, not the field structure
- **Don't change slugs** - The slug field creates the page URL; changing it can break links
- **Don't copy/paste from Word** - This can add weird formatting; use plain text instead
- **Don't panic** - All changes can be reverted if something goes wrong

---

## Troubleshooting

### "Not Found" Error When Logging In
- Make sure you're using the correct GitHub account
- Check that you've been added to the repository (Option A users)
- Try logging out of GitHub and logging back in

### "Repo Not Found" Error
- Contact the site administrator to ensure you have access to the repository
- For Option A users: Verify your GitHub username was added correctly

### Changes Not Appearing on Website
- Wait 2-3 minutes for the site to rebuild
- Refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Check that you clicked "Publish" (not just "Save")
- Clear your browser cache if needed

### Can't Edit a Certain Field
- Some fields are intentionally locked (like slugs on Skills pages)
- If you need to change a locked field, contact the site administrator

### Lost Your Work
- The CMS auto-saves drafts periodically
- Check the "Drafts" or "Workflow" section
- If you can't find it, contact the administrator

---

## Getting Help

If you encounter any issues or have questions:

1. **Check this guide first** - Most common questions are answered here
2. **Contact the site administrator**: [contact information]
3. **Don't be afraid to experiment** - All changes are tracked and reversible

---

## Best Practices

### For Home Page:
- Keep the title concise and welcoming
- Subtitle should be 2-3 paragraphs maximum
- Button text should be action-oriented ("View Projects", not "Click Here")

### For Skills Pages:
- Maintain consistent formatting across all skills pages
- Use emojis sparingly and appropriately
- Keep content informative but not overly technical

### For Blog Posts:
- Use descriptive titles
- Include a hero image when possible
- Add relevant tags and categories for organization
- Proofread before publishing
- Keep paragraphs short for better readability

### For About Us:
- Update regularly to reflect current team and initiatives
- Keep contact information current
- Use professional but accessible language

---

## Shared Account Etiquette (Option B Users)

If you're using the shared rcc.cuny@gmail.com account:

- ✅ **Log out when done** - Don't stay logged in
- ✅ **Be mindful of others** - Multiple people may be editing
- ✅ **Communicate with your team** - Let others know if you're making major changes
- ✅ **Don't change the password** - Keep the shared credentials as provided

---

## Quick Reference

| Task | Steps |
|------|-------|
| Access CMS | Go to https://rcc-website-five.vercel.app/admin |
| Login | Click "Login with GitHub" |
| Edit Page | Collections → Select page → Edit → Save → Publish |
| Create Blog Post | Blog Posts → New → Fill fields → Save → Publish |
| Preview | Changes appear on right side automatically |
| Publish | Click "Publish" button (top right) |
| See Live Changes | Wait 2-3 minutes, then refresh website |

---

## Remember

- 💾 **Save often** to keep your work
- 👁️ **Preview** before publishing
- ⏱️ **Wait 2-3 minutes** for changes to go live
- 🔄 **All changes are reversible** - don't worry about mistakes
- 📧 **Contact the administrator** if you need help

---

**Last Updated**: [Date]
**CMS URL**: https://rcc-website-five.vercel.app/admin
**Live Website**: https://rcc-website-five.vercel.app
