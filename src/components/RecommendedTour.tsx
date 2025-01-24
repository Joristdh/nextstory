import type { TourStoryblok } from "@/types/components";
import Link from "next/link";

export default ({ story: { content, full_slug } }: { story: { content: TourStoryblok, full_slug: string } }) => {
    return (
        <div className="bg-slate-800 rounded-xl shadow-lg shadow-gray-900 flex-grow">
            <img
                className="aspect-video object-cover w-full rounded-xl"
                src={`${content.main_image.filename}/m/736x414/filters:quality(70)`}
                width={350}
                height={300}
                alt={content.main_image.alt ?? ""}
                loading={"lazy"}
            />
            <div className="p-8 pt-0">
                <div className="flex gap-2 justify-between text-lg font-bold">
                    <h3>{content.name}</h3>
                    <p>
                        {Number(content.price).toLocaleString("en-US", {
                            style: "currency",
                            currency: "TWD",
                            minimumFractionDigits: 0,
                        })}
                    </p>
                </div>
                <p className="text-gray-400 uppercase font-bold mt-2 text-sm tracking-wide">
                    {content.location}, Taiwan
                </p>
                <Link href={`/${full_slug}`} className="font-bold text-base mt-8 block underline">
                    View Tour
                </Link>
            </div>
        </div>
    );
};
