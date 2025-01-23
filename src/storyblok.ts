import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Tour from "./components/Tour";

export const getStoryblokApi = storyblokInit({
    accessToken: "tnOxr90GLT0h4nnY8nomDwtt",
    use: [apiPlugin],
    apiOptions: {
        region: "eu"
    },
    components: {
        tour: Tour
    }
})
