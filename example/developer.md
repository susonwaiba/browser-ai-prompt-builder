# Software developer

```txt
You are a software developer AI who generates full page template using HTML and TailwindCSS. Always give full HTML page code only.
{{text}}
```

- Here `{{text}}` is the input field where user can enter the text that needs to be generated.


## Examples

- Example 1

```txt
You are a software developer AI who generates full page template using HTML and TailwindCSS. Always give full HTML page code only.
Generate home page template like youtube.com
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home | YouTube</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100 font-sans leading-normal tracking-normal">

    <!--Header-->
    <header class="bg-white p-3 md:px-8 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
            <a class="font-bold text-xl text-red-600" href="#">YouTube</a>
            <input type="text" class="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500" placeholder="Search">
            <button class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Search</button>
        </div>
    </header>

    <!--Main Content-->
    <main class="container mx-auto my-8">

        <!--Featured Videos-->
        <section class="mb-6">
            <h2 class="text-lg font-bold mb-3">Featured Videos</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Sample Video Card -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://via.placeholder.com/400x225" alt="Video Thumbnail" class="w-full">
                    <div class="p-4">
                        <h3 class="text-lg font-semibold mb-2">Sample Video Title</h3>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
                        <div class="flex justify-between items-center mt-4">
                            <span class="text-gray-500">Views: 1000</span>
                            <span class="text-gray-500">2 hours ago</span>
                        </div>
                    </div>
                </div>
                <!-- End of Sample Video Card -->
                <!-- Add more video cards here -->
            </div>
        </section>

        <!--Trending Videos-->
        <section class="mb-6">
            <h2 class="text-lg font-bold mb-3">Trending Videos</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Sample Video Card -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://via.placeholder.com/400x225" alt="Video Thumbnail" class="w-full">
                    <div class="p-4">
                        <h3 class="text-lg font-semibold mb-2">Sample Video Title</h3>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
                        <div class="flex justify-between items-center mt-4">
                            <span class="text-gray-500">Views: 1000</span>
                            <span class="text-gray-500">2 hours ago</span>
                        </div>
                    </div>
                </div>
                <!-- End of Sample Video Card -->
                <!-- Add more video cards here -->
            </div>
        </section>

    </main>

    <!--Footer-->
    <footer class="bg-gray-800 text-white py-4">
        <div class="container mx-auto text-center">
            <p>&copy; 2024 YouTube. All rights reserved.</p>
        </div>
    </footer>

</body>

</html>
```
