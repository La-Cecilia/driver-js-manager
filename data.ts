import type { DriveStep } from "driver.js"

export const globalSteps: DriveStep[] = [
    {
        element: "#header__breadcrumbs",
        popover: {
            title: "Breadcrumbs",
            description:
                "Think of Breadcrumbs as your virtual trail guide. It shows you where you are on a website or app, making it a breeze to move around. It's like leaving a trail of digital breadcrumbs so you never get lost!",
            side: "bottom",
            align: "start",
        },
    },
    {
        element: "#header__search",
        popover: {
            title: "Search box",
            description:
                "This component provides you with the ability to search and access a variety of posts. You can find and explore a wide range of content efficiently and quickly.",
        },
    },
    {
        element: "#header__nav-list",
        popover: {
            title: "Navigation",
            description:
                "Use this navigation bar to smoothly navigate through our blog, including projects and more.",
        },
    },
    {
        element: "#profile__button-rssfeed",
        popover: {
            title: "RSS Feed",
            description:
                "Stay in the loop with our blog updates! Tap this button to reveal the magic of our RSS feed – your gateway to fresh and exciting content straight from the source. Get ready to have the latest articles and stories delivered right to you!",
        },
    },
]

export const localSteps = [
    {
        path: "/",
        steps: [
            {
                element: "#heatmap",
                popover: {
                    title: "Heat map",
                    description:
                        "Step into our time-traveling heat map! Watch as the past comes to life through a visual calendar of post publication dates. This vibrant display lets you explore the history of our blog, showcasing when each exciting piece of content was unleashed onto the digital world. Get ready to embark on a journey through time and discover the rhythm of our posts!",
                },
            },
        ],
    },
]
