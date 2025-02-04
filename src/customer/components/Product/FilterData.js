export const color = [
    "White",
    "Black",
    "Red",
    "Maroon",
    "Beige",
    "Pink",
    "Green",
    "Yellow",
];

export const filters = [
    {
        id: "color",
        name: "color",
        options: [
            { value: "white", label: "White", checked: false },
            { value: "beige", label: "Beige", checked: false },
            { value: "blue", label: "Blue", checked: false },
            { value: "brown", label: "Brown", checked: false },
            { value: "green", label: "Green", checked: false },
            { value: "purple", label: "Purple", checked: false },
            { value: "yellow", label: "Yellow", checked: false },
        ],
    },

    {
        id: "size",
        name: "Size",
        options: [
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
        ],
    },

];

export const singleFilter=[
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "Tk159 To Tk399" },
            { value: "339-999", label: "Tk399 To Tk999" },
            { value: "999-1999", label: "Tk999 To Tk1999" },
            { value: "1999-2999", label: "Tk1999 To Tk2999" },
            { value: "3999-4999", label: "T3999 To Tk4999" },
        ],
    },
    {
        id: "discount",
        name: "Discount Range ",
        options: [
            {
                value: "10",
                label: "10% And Above",

            },
            { value: "20", label: "20% And Above" },
            { value: "30", label: "30% And Above" },
            { value: "40", label: "40% And Above" },
            { value: "50", label: "50% And Above" },
            { value: "60", label: "60% And Above" },
            { value: "70", label: "70% And Above" },
            { value: "80", label: "80% And Above" },
        ],
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "in-stock", label: "In Stock" },
            { value: "out-of-stock", label: "Out of Stock" },
        ],
    },
]

export const sortOptions = [

    { name: "Price: Low to High", query: "price_low", current: false },
    { name: "Price: High to Low", query: "price_high", current: false },
];
