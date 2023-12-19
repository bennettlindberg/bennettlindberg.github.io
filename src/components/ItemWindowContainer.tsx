export default function ItemWindowContainer({children}: {children: React.ReactNode}) {
    return (
        <>
            {/* <div className="flex flex-row flex-wrap gap-x-5 gap-y-5 mx-5 my-14">
                {children}
            </div> */}
            <div className="grid grid-cols-6 gap-x-5 gap-y-5 mx-5 my-14">
                {children}
            </div>
        </>
    )
}