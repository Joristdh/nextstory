import type { TourStoryblok } from "@/types/components"


export default ({ blok: { name, introduction, main_image } }: { blok: TourStoryblok }) => {
    return <div className="m-6 flex-col flex items-center grow-0">
        <img
            className="rounded-xl w-full"
            src={main_image.filename ?? ""}
            alt={main_image.alt ?? ""}
        />
        <h1>{name}</h1>
        <p>{introduction}</p>
    </div>
}
