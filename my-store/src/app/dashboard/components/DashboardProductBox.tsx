import { ProductBoxProps } from "@/components/ProductBox";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface DashboardProductBoxProps extends ProductBoxProps {
  deleteProduct: (id: string) => void;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  setNewProduct: Dispatch<
    SetStateAction<{
      title: string;
      image: string;
      price: string;
      id?:string
    }>
  >;
}

function DashboardProductBox({
  image,
  price,
  title,
  id,
  deleteProduct,
  setIsEditing,
  setNewProduct,
}: DashboardProductBoxProps) {
  const onEdit = () => {
    setIsEditing(true);
    setNewProduct({
      title,
      image,
      price: price.toString(),
      id
    });
  };

  return (
    <div className="grid bg-gray-100 grid-cols-12">
      {/* Image */}
      {image && (
        <Image
          className="col-span-2"
          src={image}
          alt="cart image"
          width={10000}
          height={10000}
        />
      )}
      {/* content */}
      <div className="col-span-10 flex flex-col gap-y-2 p-4">
        {/* title */}
        <h2 className="text-lg font-bold">{title}</h2>
        {/* price */}
        <p>
          price: <span>{price}</span>$
        </p>

        {/* buttons */}
        <div className="flex gap-x-4 items-center">
          <button
            onClick={onEdit}
            className="px-3 py-1 bg-blue-500 text-white rounded text-xl"
          >
            Edit
          </button>

          <button
            onClick={() =>
              toast.info(
                <div>
                  <h3>Are you sure?</h3>
                  {/* <p>This action cannot be undone.</p> */}
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button
                      onClick={() => {
                        deleteProduct(id);
                        toast.dismiss();
                      }}
                      className="bg-red-500 px-2 py-1 text-white"
                    >
                      Delete
                    </button>
                    <button onClick={() => toast.dismiss()}>Cancel</button>
                  </div>
                </div>,
                {
                  autoClose: false,
                }
              )
            }
            className="px-3 py-1 bg-red-500 text-white rounded text-xl"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardProductBox;
