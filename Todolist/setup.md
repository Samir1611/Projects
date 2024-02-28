## How to set up Tailwind CSS

Step 1: Run the following Commands

```
npm install -D tailwindcss
npx tailwindcss init -p
```

Step 2:Update tailwind.config.js file to 
```
 content: ["*.html"]
 ```
 Step 3:Create src/input.css to include:
 ```
 @tailwind base;
@tailwind components;
@tailwind utilities;
```
Step 4: Include the file to your html.
```
 <link href="src/output.css" rel="stylesheet">
``` 

Step 5: Run the command:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```
