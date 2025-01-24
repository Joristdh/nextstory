import { getStoryblokApi } from "@/storyblok"
import { StoryblokStory } from "@storyblok/react/rsc"

const fetchHomepage = async () => (await getStoryblokApi()
  .getStory('home', {
    version: "draft",
    resolve_relations: "recommended_tours.tours"
  })).data.story

export default async () => {
  return <>
    <div className="flex flex-col items-center border-red-700 border-6 border-solid">
      <h1>Storyblok headless CMS x Next.js</h1>
      <p>I'm not editable by Storyblok</p>
    </div>
    <StoryblokStory story={await fetchHomepage()} />
  </>
}
