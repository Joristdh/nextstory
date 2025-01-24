import type { GridStoryblok } from "@/types/components";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default ({ blok: { headline, Items } }: { blok: GridStoryblok }) => {
    return <section>
        <h3>{headline}</h3>
        {Items.map(blok => <StoryblokServerComponent blok={blok} key={blok._uid} />)}
    </section>;
}
