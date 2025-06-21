export default function ({heading, headingHighlight, paraText}) {
    return (
        <div>
            {heading && (
                <h1 className="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl">
                    {heading}
                    <span className="text-blue-600 dark:text-blue-500">{headingHighlight}</span>
                </h1>)}

            <p className="text-lg text-gray-500 ">{paraText}</p>
        </div>
    )
}
//
