export default function SubHeading({children}: {children: React.ReactNode}) {
    return (
        <>
            <div className="text-lg font-bold underline mb-1 text-black dark:text-white">
                {children}
            </div>
        </>
    )
}