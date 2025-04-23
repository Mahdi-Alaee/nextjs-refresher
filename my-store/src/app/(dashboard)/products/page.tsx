import Container from "@/components/Container";

function Products() {
    return ( 
        <Container className="mt-12  flex flex-col gap-y-4">
            <div className="">
            <form className="flex flex-col max-w-xl mx-auto p-2 gap-y-2 bg-slate-300">
                <h1 className="text-2xl text-center pb-2">Add product form</h1>
                <input className="p-2" type="text" placeholder="title ..." />
                <input className="p-2" type="text" placeholder="image ..." />
                <input className="p-2" type="text" placeholder="price ..." />
                <button className="bg-sky-500 py-2 text-gray-200 text-lg duration-100 hover:bg-sky-600">add</button>
            </form>

            <div>
                لیست محصولات ...
            </div>
            </div>
        </Container>
     );
}

export default Products;