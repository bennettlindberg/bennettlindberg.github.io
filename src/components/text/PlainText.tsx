export default function PlainText({children}: {children: React.ReactNode}) {
    return (
        <>
            <div className="mb-2 text-md font-normal text-slate-600 dark:text-slate-300">
                {children}
            </div>
        </>
    )
}