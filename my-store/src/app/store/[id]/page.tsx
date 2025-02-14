import Container from "@/components/Container";
import Image from "next/image";

function ProductPage() {
    return ( 
        <Container className="pt-12">
            <div className="grid grid-cols-12 gap-x-4 shadow-md">
                <div className="col-span-4 bg-black">
                    <div className="w-full">
                    <Image width={10000} height={10000} src='https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg' alt="product Image" />
                    </div>
                </div>
                <div className="col-span-8">
                    <h2>product title 1</h2>
                    <p>u fdhbvi bn etnb tgrnb ujternbju trnjubnr bjnrtj nboju jtrou jtgrjb iotrj biortj irtgjb oitrj bitrj biotrj iborj  ngdib hufg grh urthb urtjgbu jruib jr hb</p>
                    <p>price: <span>12$</span></p>
                    {/* add to cart */}
                    <div className="flex gap-x-4 items-center">
                        <button className="px-3 py-1 bg-red-500 text-white rounded text-xl">-</button>
                        <span>3</span>
                        <button className="px-3 py-1 bg-blue-500 text-white rounded text-xl">+</button>
                    </div>
                </div>
            </div>
        </Container>
     );
}

export default ProductPage;