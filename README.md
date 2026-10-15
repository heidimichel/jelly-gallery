# JellyGallery

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.15. The plan is to create a small online gallery to categorize and show jelly shoes like Melissa, Petit Jolie, Lemon Jelly, among others. After the main gallery is done, I also want to do some kind of CRUD to add new products to the gallery. I'm using this primordially for learning Angular and improving my frontend skills, as well as learning some backend development. Let's see how it goes. A further step would be allowing other interested people to help expand this gallery.

Current BE is in Supabase.

TODO: buy a domain - either jelly-gallery.net or jelly-gallery.dev
TODO: create an edit page

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Schematics

- main component (jelly)
    - top-menu
    - content (where everything will load)
        - home page
        - about page
        - login page
        - flavours page
        - search page
            - side menu
            - search results
                - result (a miniature)
                (clicking on the search result leads to the product page)
    - footer

