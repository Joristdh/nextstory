import type { PageStoryblok } from "@/types/components";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default ({ blok: { body } }: { blok: PageStoryblok }) => {
    return <main className="border-6 border-solid border-green-700 flex flex-col items-center">
        {body?.map((blok) => {
            return <StoryblokServerComponent blok={blok} key={blok._uid} />;
        })}
    </main>;
}
