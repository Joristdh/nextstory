import RecommendedTour from "@/components/RecommendedTour";
import { getStoryblokApi } from "@/storyblok";
import type { TourStoryblok } from "@/types/components";
import { StoryblokStory } from "@storyblok/react/rsc";

const api = getStoryblokApi()
const version = process.env.NODE_ENV === "development" ? "draft" : "published"

const fetchToursPage = async () => {
    return (await api.getStory(`tours`, { version })).data.story;
};

const fetchAllTours = async () => {
    return (await api.getStories({ content_type: "tour", version }))
        .data.stories as unknown as { content: TourStoryblok, full_slug: string, uuid: string }[];
};

export default async () => {
    const story = await fetchToursPage();
    const tours = await fetchAllTours();

    return <section className="m-11">
        <StoryblokStory story={story} />
        <div className="mt-8 flex gap-4 flex-wrap">
            {tours.map(tour => <RecommendedTour story={tour} key={tour.uuid} />)}
        </div>
    </section>
};
