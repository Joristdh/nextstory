"use client"
import { getStoryblokApi } from "@/storyblok";
import Link from "next/link";
import { useEffect, useState } from "react";

type ProductBlokType = { name: string; full_slug: string; uuid: string; id: number; }

const api = getStoryblokApi()
const fetchAllProducts = async () => (await getStoryblokApi()
    .getStories({ starts_with: "products", content_type: "product", version: "draft" }))
    .data.stories as unknown as ProductBlokType[];

export default () => {
    const [products, setProducts] = useState<ProductBlokType[]>()

    function deleteProduct(event: Event) {
        const storyId = event.currentTarget!.previousElementSibling.id
        api.delete(`/spaces/322260/stories/${storyId}`, {}).then(() => {
            setProducts(products?.filter(({ id }) => id !== +storyId));
        })
    }

    function createProduct(event: FormDataEvent) {
        event.preventDefault()
        if (!event.target) return
        const name = new FormData(event.target as HTMLFormElement).get("name") as string

        api.post("/spaces/322260/stories", {
            story: {
                name: name,
                slug: name.toLowerCase(),
                content: {
                    component: "product",
                    name: "Test",
                    price: 10,
                    location: "Eindhoven",
                    body: "Lorem...",
                    SKU: "NCS S 0500-N",
                    main_image: {
                        "id": 20144379,
                        "filename": "https://a.storyblok.com/f/322260/1024x683/45adf481bb/things-to-do-in-eindhoven.jpg",
                        "fieldtype": "asset",
                        "is_external_url": false
                    },
                },
                // This parentId places it under the "Products folder"
                parent_id: "614503763",
            },
            publish: 1
            // @ts-expect-error 
        }).then(({ data }: { data: { story: ProductBlokType } }) => {
            setProducts([data.story, ...products!])
        })
    }

    useEffect(() => {
        fetchAllProducts().then(setProducts)
    }, [])
    return <>
        <section className="flex items-center justify-center flex-col gap-4 h-[60vh]">
            {products?.map(({ name, full_slug, uuid, id }) => <span key={uuid} className="flex gap-2 items-center">
                <Link href={full_slug} id={id.toString()}><h1>Go to {name}</h1></Link>
                <button
                    title="Delete this product"
                    className="appearance-none border-none bg-transparent text-white cursor-pointer"
                    onClick={deleteProduct}
                >🗑️</button>
            </span>)}
        </section>
        <form onSubmit={createProduct} className="flex flex-col gap-2 items-center justify-center">
            <label htmlFor="name">
                Enter product name:
            </label>
            <input
                id="name" name="name"
                className="shadow appearance-none border rounded-full px-3 py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
                className="border-0 hover:cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                type="submit"
            >Create new Product</button>
        </form>
    </>
}
