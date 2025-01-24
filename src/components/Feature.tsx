import type { FeatureStoryblok } from "@/types/components";

export default ({ blok: { headline, content } }: { blok: FeatureStoryblok }) => {
    return <section>
        <div className="border-2 border-solid border-blue-500 rounded-md bg-slate-600 px-10 m-1">
            <h4>{headline}</h4>
            <p>{content}</p>
        </div>
    </section>;
}
