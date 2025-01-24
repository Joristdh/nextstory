import type { TestimonialStoryblok } from "@/types/components";

export default ({ blok: { name, comment } }: { blok: TestimonialStoryblok }) => {
    return <section>
        <div className="border-2 border-solid border-yellow-500 rounded-md bg-slate-600 px-5 m-1">
            <h4>{name}</h4>
            <p>{comment}</p>
        </div>
    </section>;

}
