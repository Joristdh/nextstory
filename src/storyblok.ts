import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Feature from "./components/Feature";
import Grid from "./components/Grid";
import Hero from "./components/Hero";
import Page from "./components/Page";
import Product from "./components/Product";
import RecommendedTours from "./components/RecommendedTours";
import Testimonial from "./components/Testimonial";
import Tour from "./components/Tour";

export const getStoryblokApi = storyblokInit({
    accessToken: "tnOxr90GLT0h4nnY8nomDwtt",
    use: [apiPlugin],
    apiOptions: {
        fetch: (input, init) => fetch(input, { ...init, cache: "no-store" }),
        oauthToken: "<>",
        region: "eu"
    },
    components: {
        page: Page,
        tour: Tour,
        product: Product,
        grid: Grid,
        feature: Feature,
        testimonial: Testimonial,
        Hero: Hero,
        recommended_tours: RecommendedTours
    },
    enableFallbackComponent: true
})
