export const GifItem = ({title,src}) => {
    return (
        <div className='card'>
            <img
                alt={title}
                src={src}
            />
            <p>{title}</p>
        </div>
    );
}
