function NotFound({ title }: { title: string }) {
    return (
        <div className="card bg-base-100 shadow-2xl lg:shadow-none p-2">
            <figure>
                <img
                    className="h-80 w-auto object-cover object-center rounded-box"
                    src='/logo_footer.png'
                    alt={title}
                />
            </figure>
            <div className="card-body">

                <h2 className="card-title">{
                    `No se encontraron elementos para ${title}`
                }</h2>
            </div>
        </div>
    )
}


export {
    NotFound
}