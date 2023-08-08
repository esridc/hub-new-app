# ajturner-prototype-template
Template for creating prototypes with Stencil.js and Calcite compnents

## Steps to use

1. click "Use this Template" and "Create a new repository"
1. clone repo to your developer machine
1. find and replace the string `REPLACE_PROJECT_NAME` with your project name, e.g. `hub-chatbot`
1. install dependencies `npm i`
1. copy Calcite assets `cp -r node_modules/@esri/calcite-components/dist/calcite/assets/* ./src/assets/`
1. create new components with `npx stencil g`
1. modify `src/index.html` for your component name and any props. 
    - the example `index.html` uses script to add component to DOM so you can pass complex objects and other dynamic props
1. run the server `npm run start`


## Publish to Github Pages

When you are ready to create a Github Page (Github action already present) you need to enable the Page and action permissions. After this all pushes to _main_ will rebuild the page.

1. push to github `git push origin main`
1. in Github Repo UI, under **Settings > Actions > General_ in **Workflow Permissions** change to **Read and Write Permissions**
1. in Github Repo UI, under **Settings > Pages** in _Build and Deployment > Branch_ choose _gh-pages_ and **Save**
1. Re-run the job. 

The first push will fail because the _gh-pages_ branch does not exist until after you push.