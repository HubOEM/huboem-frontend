const products = [
    {
        id: 1,
        name: 'Phoenix',
        href: 'oem{id}',
        imageSrc: 'https://media.licdn.com/dms/image/C4E0BAQG1aMJ8AuMzPQ/company-logo_200_200/0/1630616721227/phoenix_stretch_wrapping_equipment_logo?e=2147483647&v=beta&t=PodB-0Eoj0K4Z-lVoSKRPfcxcDfNXwbWcv6_WOUL7i0',
        imageAlt: "Front of men's Basic Tee in black.",
        productType: 'Stretch Wrappers',
    },
    {
        id: 2,
        name: 'DEL Packaging',
        href: 'oem{id}',
        imageSrc: 'https://media.licdn.com/dms/image/D560BAQH6Et8nS0vY7w/company-logo_200_200/0/1699557231129/del_packaging_ltd_logo?e=2147483647&v=beta&t=qvcirycvJd9mw2OKoIZoADj-cqVJxhPdrB6HjQpjO94',
        imageAlt: "Front of men's Basic Tee in black.",
        productType: 'Lid Machines',
    },
    {
        id: 3,
        name: 'Palmer',
        href: 'oem{id}',
        imageSrc: 'https://www.probrewer.com/wp-content/uploads/2018/08/SD-logo-Palmer_Beverage_Badge_Logo_2_BlackRGB.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        productType: 'Fillers, cappers',
    },
    {
        id: 4,
        name: 'Schneider',
        href: 'oem{id}',
        imageSrc: 'https://www.automate.org/userAssets/members/3223/logo/ria-Schneider-logo_RIA.png',
        imageAlt: "Front of men's Basic Tee in black.",
        productType: 'Palletizing and case packers',
    },
    {
        id: 5,
        name: 'P&P Optica',
        href: 'oem{id}',
        imageSrc: 'https://uwaterloo.ca/vision-image-processing-lab/sites/ca.vision-image-processing-lab/files/uploads/images/photo.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        productType: 'Inspection',
    },
    {
        id: 6,
        name: 'Advanced Manufacturing Technology',
        href: 'oem{id}',
        imageSrc: 'https://amtcolorado.com/cdn/shop/files/AMT_logo_horizontal_white_14a0388a-0b0d-452d-8c1a-e5bb9eb0a317_200x@2x.png?v=1615322835',
        imageAlt: "Front of men's Basic Tee in black.",
        productType: 'Conveyors',
    },
    {
        id: 7,
        name: 'Pharmaworks',
        href: 'oem{id}',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQsCiBL0nCpK1umpjWT_8oCDWpJxXnAxrtuTdk8ycIw&s',
        imageAlt: "Front of men's Basic Tee in black.",
        productType: 'Pill Packaging',
    },
    {
        id: 8,
        name: 'D&F Equipment',
        href: 'oem{id}',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsb4fHTx1mNEaHfl_BoOMsAX1cNgYI06DYliNV_rc6GQ&s',
        imageAlt: "Front of men's Basic Tee in black.",
        productType: 'Equipment',
    },
    {
        id: 9,
        name: 'Haarslev',
        href: 'oem{id}',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhDaJJugcGz3MWGqz8WwAJ7_G8W8_QIEiJiygGF8n2g&s',
        imageAlt: "Front of men's Basic Tee in black.",
        productType: 'Equipment',
    },
    {
        id: 10,
        name: 'Insite Packaging Automation',
        href: 'oem{id}',
        imageSrc: 'https://img.packworld.com/files/base/pmmi/all/image/2024/01/INSITE20with20Tagline20RGB2072ppi.png?auto=format%2Ccompress&bg=fff&fill-color=fff&fit=fill&h=167&pad=5&q=70&w=250',
        imageAlt: "Front of men's Basic Tee in black.",
        productType: 'Equipment',
    },
    {
        id: 11,
        name: 'Douglas Machinery',
        href: 'oem{id}',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_kYHvZMh_Y81Uw6A_Od0MJbV6d2mnzoipu-yhxhozaQ&s',
        imageAlt: "Front of men's Basic Tee in black.",
        productType: 'Equipment',
    },
    {
        id: 12,
        name: 'ESS Technologies',
        href: 'oem{id}',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjbPEixdJLWmV2hmEQRK0ivKSqXcLerQgVmwn2jdNkA&s',
        imageAlt: "Front of men's Basic Tee in black.",
        productType: 'Equipment',
    },
]

function OEMsList() {
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
export default OEMsList;  