
type GalleryProps = {
    prefix: string;
    altMap?: Map<number, string>;
}

const Gallery = ({ prefix, altMap }: GalleryProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 row-gap-6">
            {Array.from({ length: 8 })
                .map((_, i) => `/images/${prefix}${i + 1}.jpg`)
                .map((img, i) => (
                    <figure className="hover:z-10" key={i}>
                        <img
                            src={img}
                            className="w-48 h-48 object-cover rounded shadow-lg hover:shadow-xl transform transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-150"
                            loading="lazy"
                            width="192"
                            height="192"
                        />
                    </figure>
                ))}
        </div>
    )
}

export default Gallery;
