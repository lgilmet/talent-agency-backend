export default {
    name: "model",
    title: "Model",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
            },
        },
        {
            name: "mainImage",
            type: "image",
            title: "Main Image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "links",
            title: "Links",
            type: "array",
            of: [{ type: "reference", to: { type: "link" } }],
        },
    ],
};
