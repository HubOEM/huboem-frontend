
const products = [
    {
        id: 1,
        name: 'Stretch Wrapper',
        href: ':machine{id}',
        imageSrc: 'https://phoenixwrappers.com/wp-content/uploads/2019/06/PRTL-2150.jpg',
        imageAlt: "stretch wrapper",
        productType: 'Phoenix - Stretch Wrappers',
    },
    {
        id: 2,
        name: 'Overcapper',
        href: ':machine{id}',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl4AAKsHDVKTSqdQuU2jJ02UUcTT1AXd7kl2YdWWBoNw&s',
        imageAlt: "overcapper",
        productType: 'DEL Packaging - Lid Machines',
    },
    {
        id: 3,
        name: 'Capper',
        href: ':machine{id}',
        imageSrc: 'https://palmerbeverage.systems/wp-content/uploads/2022/09/24-4-Filler.jpg',
        imageAlt: "Capper",
        productType: 'Palmer - Fillers, cappers',
    },
    {
        id: 3,
        name: 'Case Packer',
        href: ':machine{id}',
        imageSrc: 'https://i.ytimg.com/vi/zM_8pHBvYm0/maxresdefault.jpg',
        imageAlt: "Case Packer",
        productType: 'Schneider - Palletizing and case packers',
    },
    // More products...
]

function MyMachinesList() {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Original Equipment Manufacturers</h2>

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
export default MyMachinesList;  