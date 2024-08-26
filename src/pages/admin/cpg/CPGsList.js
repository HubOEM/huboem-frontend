const products = [
    {
        id: 1,
        name: 'Brewery',
        href: 'cpg{id}',
        imageSrc: 'https://chicagoparent.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2022/08/family-friendly-breweries-chicago-photo-credit-old-irving-brewing-co-696x416.jpg',
        imageAlt: "Beer",
        color: 'Beer',
    },
    {
        id: 2,
        name: 'Water Bottles',
        href: 'cpg{id}',
        imageSrc: 'https://wcponline.com/wp-content/uploads/2021/09/SEP2021_Feat_Culora_HDR.png',
        imageAlt: "Water",
        color: 'Water',
    },
    {
        id: 3,
        name: 'Winery',
        href: 'cpg{id}',
        imageSrc: 'https://fdc-comp.com/wp-content/uploads/2015/11/Trinchero-Winery-6.jpg',
        imageAlt: "Winery",
        color: 'Wine',
    },
    {
        id: 4,
        name: 'Chocolate Company',
        href: 'cpg{id}',
        imageSrc: 'https://www.foodprocessing-technology.com/wp-content/uploads/sites/19/2017/10/2-chocolate.jpg',
        imageAlt: "Chocolate",
        color: 'Chocolate',
    },
    // More products...
]

function CPGsList() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Consumer Goods Manufacturers</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-40 w-40 lg:h-full lg:w-full object-center"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default CPGsList;  