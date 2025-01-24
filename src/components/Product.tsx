import type { ProductStoryblok } from "@/types/components"


export default ({ blok: { name, body, main_image, SKU } }: { blok: ProductStoryblok }) => {
    return <div className="m-6 flex-col flex items-center grow-0">
        <img
            className="rounded-xl w-full"
            src={main_image.filename ?? ""}
            alt={main_image.alt ?? ""}
        />
        <h1>{name}</h1>
        <p>{body}</p>
        <span><b>SKU:</b> {SKU}</span>
    </div>
}
