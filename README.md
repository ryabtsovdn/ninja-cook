<p align="center">
  <a href="https://ninjacook.ru">
    <img alt="Ninja Cook" src="./static/favicon-32x32.png" width="32" />
  </a>
</p>
<h1 align="center">
  Ninja Foodi Recipes
</h1>

Food recipes website developed using Gatsby and Contentful as a headless CMS.

## 🚀 Quick start

1.  **Start developing**

    You need a [Contentful](https://www.contentful.com/) account to work with this project.

    Create "recipe" content type with the following fields:

    - title (Short text)
    - description (Long text)
    - cookTime (Integer)
    - prepTime (Integer)
    - servings (Integer)
    - featured (Boolean)
    - image (Media)
    - content (JSON object)

    <br/>Content field example:

    ```json
    {
      "tags": ["ribs", "dinner", "lunch", "nice rice", "food"],
      "tools": [
        "hand blender",
        "large heavy pot with lid",
        "measuring spoons",
        "measuring cups"
      ],
      "ingredients": [
        "1  1/2 cups dry pancake mix",
        "1/2 cup flax seed meal",
        "1 cup skim milk"
      ],
      "instructions": ["Step 1", "Step 2", "Step 3", "Step 4"]
    }
    ```

    When you have some content with an appropriate type create the `.env.development` file in your root directory with the following values:

    ```properties
    CONTENTFUL_API_KEY=<Use existing key (Delivery API) or create a new one in Settings-API Keys>
    GATSBY_CONTACT_FORM_URL=<Any form submission API URL (e.g. formspree.io)>
    GATSBY_GTM_ID=<Google Tag Manager container ID>
    ```

    Navigate into your root site’s directory and run:

    ```shell
    npm start
    ```

2.  **Open the source code and start editing**

    Your site is now running at `http://localhost:8000`!

    Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries).
