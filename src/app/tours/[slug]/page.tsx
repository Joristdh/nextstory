import { getStoryblokApi } from "@/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

const api = getStoryblokApi()
const version = process.env.NODE_ENV === "development" ? "draft" : "published"

export const generateStaticParams = async () => (await api.getStories({ content_type: "tour", version }))
    .data.stories.map(({ slug }) => ({ slug }))

const fetchTourPage = async (slug: string) => (await api.getStory(`tours/${slug}`, { version }))
    .data.story

export default async (props: any) => {
    const story = await fetchTourPage(props.params.slug)
    return <StoryblokStory story={story} />;
}
