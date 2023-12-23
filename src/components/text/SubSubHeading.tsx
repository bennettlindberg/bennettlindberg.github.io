export default function SubSubHeading({children}: {children: React.ReactNode}) {
    return (
        <>
            <div className="text-md font-bold text-black dark:text-white">
                {children}
            </div>
        </>
    )
}