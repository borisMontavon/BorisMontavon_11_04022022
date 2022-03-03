function Banner({ src, alt, heightClass, title }) {
    const styles = {"objectFit": "cover", "objectPosition": "center"};

    return (
        <div className="w-full px-6 mb-6 pt-0 lg:my-10 lg:px-24 relative">
            <img
                src={src}
                alt={alt}
                width="100%"
                className={`rounded-md lg:rounded-3xl ${heightClass}`}
                style={styles}
            />
            <h1 className="absolute font-medium text-white text-xl lg:text-3xl banner-title lg:text-center">
                {title}
            </h1>
        </div>
    );
}

export default Banner;
