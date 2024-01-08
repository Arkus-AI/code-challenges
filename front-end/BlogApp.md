# Blog App

Create a basic blog app using React and TypeScript. The app will have the following pages: a blog post list page, a blog post detail page, a new blog post page, and an edit blog post page.

## Requirements

#### Blog Post List (`/posts`)

- Display a paginated list of blog posts, including their titles, excerpts, and an image.
- Clicking on a blog post should redirect the user to the blog post detail page.
- (Bonus) Add a search bar to filter the blog post list by title. Implement debounce to prevent excessive API calls.

#### Blog Post Detail Page (`/posts/:id`)

- Display the blog post's title, content, image, and creation date.
- Include a button to edit the blog post.
- Include a button to delete the blog post.

#### New Blog Post Page (`/posts/new`)

- Include a form to create a new blog post with the following fields:
  - Title (required)
  - Content (required)
  - Image URL (optional)
- On successful submission, redirect the user to the blog post detail page.
- (Bonus) Add a WYSIWYG editor for the content field.

#### Edit Blog Post Page (`/posts/:id/edit`)

- Include a form (same as the new blog post page).
- On successful submission, redirect the user back to the blog post detail page.

#### Error Handling

- Display a message when the API request fails.
- Show a 404 page when the user navigates to a non-existent page.

#### Styling

- Apply styling to all pages.
- Ensure the app has a responsive design.

## API

Implement the app using local storage. Use [seed data](./blog-app-seed.json) to populate the database. Support all CRUD operations and persist them in local storage.
