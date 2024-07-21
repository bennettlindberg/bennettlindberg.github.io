export default function BulletList({ listElements }: { listElements: string[] }) {
    return (
        <>
            <ul>
                {listElements.map(element =>
                    <li className="text-md font-normal text-slate-600 dark:text-slate-300 flex flex-row">
                        <span className="px-2">•</span>
                        {element}
                    </li>
                )}
            </ul>
        </>
    )
}