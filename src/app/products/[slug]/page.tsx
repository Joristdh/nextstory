import { getStoryblokApi } from "@/storyblok"
import { StoryblokStory } from "@storyblok/react/rsc"

const api = getStoryblokApi()
const version = process.env.NODE_ENV === "development" ? "draft" : "published"

export const generateStaticParams = async () => (await api.getStories({ content_type: "tour", version }))
    .data.stories.map(({ slug }) => ({ slug }))

const fetchDemoPage = async (slug: string) => (await api.getStory(`products/${slug}`, { version }))
    .data.story

export default async ({ params }: { params: Promise<{ slug: string }> }) => {
    const story = await fetchDemoPage((await params).slug)
    console.log(story)
    return <StoryblokStory story={story} />;
}
