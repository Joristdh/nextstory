import type { HeroStoryblok } from "@/types/components";

export default ({ blok: { headline, content } }: { blok: HeroStoryblok }) => {
    return <section>
        <h2>{headline}</h2>
        <p>{content}</p>
    </section>;
}
