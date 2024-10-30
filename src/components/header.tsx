import search from "@/actions/search"


export default function Header() {
    return (
        <div className="bg-gray-100 mb-2 flex justify-between items-center p-5">
            <h3 className="text-xl">Email Client</h3>
            <form action={search}>
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="p-2 rounded-md"
                    placeholder="Search here"
                />
            </form>
        </div>
    )
}