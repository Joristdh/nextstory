import type { RecommendedToursStoryblok } from "@/types/components";
import RecommendedTour from "./RecommendedTour";

export default ({ blok: { headline, tours } }: { blok: RecommendedToursStoryblok }) => {
    return (
        <section className="py-16 container mx-auto w-full px-4"        >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                {headline}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-16">
                {tours.map((tour: any) => <RecommendedTour story={tour} />
                )}
            </div>
        </section>
    );
};
