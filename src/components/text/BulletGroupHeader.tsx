export default function BulletGroupHeader({children}: {children: React.ReactNode}) {
    return (
        <>
            <span className="italic pl-2 text-black dark:text-white underline">{children}</span>
        </>
    )
}