function Tags(props) {
    const { tagName } = props;

    return (
        <span className="rounded-3xl bg-primary flex justify-center items-center w-32 lg:w-40 py-1 mr-4 mb-2">
            <span className="font-medium text-xs lg:text-base text-white truncate">{tagName}</span>
        </span>
    );
}

export default Tags;
