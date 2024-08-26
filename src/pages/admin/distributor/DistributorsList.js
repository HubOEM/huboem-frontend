const products = [
    {
        id: 1,
        name: 'West Coast USA',
        href: 'distributor{id}',
        imageSrc: 'https://www.planetware.com/wpimages/2019/02/best-roads-trips-usa-west-coast-california-pacific-coast-highway-big-sur.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: '23 OEMs',
    },
    {
        id: 2,
        name: 'East Coast USA',
        href: 'distributor{id}',
        imageSrc: 'https://www.planetware.com/wpimages/2019/11/usa-east-coast-best-places-to-visit-boston.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: '17 OEMS',
    },
    {
        id: 3,
        name: 'West Coast Canada',
        href: 'distributor{id}',
        imageSrc: 'https://www.tourradar.com/days-to-come/wp-content/uploads/2017/11/Moraine-Lake.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: '8 OEMs',
    },
    {
        id: 4,
        name: 'East Coast Canada',
        href: 'distributor{id}',
        imageSrc: 'https://blog.tours4fun.com/wp-content/uploads/2019/03/shutterstock_615372038.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: '10 OEMs',
    },
    // More products...
]

function DistributorsList() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Distributors</h2>

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
                                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default DistributorsList;  