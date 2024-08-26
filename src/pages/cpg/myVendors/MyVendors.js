const products = [
    {
        id: 1,
        name: 'Phoenix',
        href: ':oem{id}',
        imageSrc: 'https://media.licdn.com/dms/image/C4E0BAQG1aMJ8AuMzPQ/company-logo_200_200/0/1630616721227/phoenix_stretch_wrapping_equipment_logo?e=2147483647&v=beta&t=PodB-0Eoj0K4Z-lVoSKRPfcxcDfNXwbWcv6_WOUL7i0',
        imageAlt: "Phoneix",
        productType: 'Stretch Wrappers',
    },
    {
        id: 2,
        name: 'Doverco',
        href: ':oem{id}',
        imageSrc: 'https://res.cloudinary.com/zoominfo-com/image/upload/w_140,h_140,c_fit/doverco.ca',
        imageAlt: "dover",
        productType: 'Distributor',
    },
    {
        id: 3,
        name: 'Palmer',
        href: ':oem{id}',
        imageSrc: 'https://www.probrewer.com/wp-content/uploads/2018/08/SD-logo-Palmer_Beverage_Badge_Logo_2_BlackRGB.jpg',
        imageAlt: "palmer.",
        productType: 'Fillers, cappers',
    },
    {
        id: 4,
        name: 'Schneider',
        href: ':oem{id}',
        imageSrc: 'https://www.automate.org/userAssets/members/3223/logo/ria-Schneider-logo_RIA.png',
        imageAlt: "schneider",
        productType: 'Palletizing and case packers',
    },
    {
        id: 5,
        name: 'DEL Packaging',
        href: ':oem{id}',
        imageSrc: 'https://media.licdn.com/dms/image/D560BAQH6Et8nS0vY7w/company-logo_200_200/0/1699557231129/del_packaging_ltd_logo?e=2147483647&v=beta&t=qvcirycvJd9mw2OKoIZoADj-cqVJxhPdrB6HjQpjO94',
        imageAlt: "del",
        productType: 'Lid Machines',
    },
    // More products...
]

function MyVendors() {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">My Vendors</h2>

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
                                    <p className="mt-1 text-sm text-gray-500">{product.productType}</p>
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
export default MyVendors;  