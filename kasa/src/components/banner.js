function Banner(props) {
    const styles = {"object-fit": "cover", "object-position": "right"};

    return (
        <div className="w-full px-6 mb-6 pt-0 md:my-10 md:px-14 lg:px-24 relative">
            <img
                src={props.src}
                alt={props.alt}
                width="100%"
                className={`rounded-md md:rounded-3xl ${props.heightClass}`}
                style={styles}
            />
            <h1 className="absolute font-medium text-white text-xl md:text-3xl banner-title md:w-full">
                {props.title}
            </h1>
        </div>
    );
}

export default Banner;
