export default function BulletList({ listElements }: { listElements: string[] }) {
    return (
        <>
            <ul>
                {listElements.map(element =>
                    <li className="pl-4 text-md font-normal text-slate-600 dark:text-slate-300">
                        • {element}
                    </li>
                )}
            </ul>
        </>
    )
}