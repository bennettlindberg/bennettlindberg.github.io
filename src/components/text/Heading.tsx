export default function Heading({children}: {children: React.ReactNode}) {
    return (
        <>
            <div className="text-2xl font-bold underline mb-2 text-black dark:text-white">
                {children}
            </div>
        </>
    )
}