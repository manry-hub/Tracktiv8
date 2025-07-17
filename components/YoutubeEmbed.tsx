export default function YoutubeEmbed() {
    return (
        <div className="relative pt-[56.25%] w-full">
            {" "}
            {/* 16:9 aspect ratio */}
            <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/4qIqJP_ZqqI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}
