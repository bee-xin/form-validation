/* import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import axios from "axios";

const getFunction = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

const postFunction = async (productData) => {
  const { data } = await axios.post(
    "https://fakestoreapi.com/products",
    productData
  );
  return data;
};

function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["id"],
    queryFn: getFunction,
  });

  const mutation = useMutation({
    mutationFn: postFunction,
    onSuccess: (response) => {
      console.log("Post Success:", response);
    },
    onError: (error) => {
      console.log("Post Error:", error);
    },
  });

  const handleSubmit = () => {
    const productData = {
      title: "New Product",
      price: 200,
      description: "Sample Description",
      category: "Sample Category",
      image: "https://via.placeholder.com/150",
    };
    mutation.mutate(productData);
  };

  console.log("Fetched Data:", data); // This is an array, not a string.

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#C7DB9C] p-4">
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {data?.map((item) => (
          <div
            key={item.id}
            className="w-80 h-60 flex flex-col items-center border border-black p-4 rounded-lg shadow-lg bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-contain"
            />
            <div className="mt-2 text-center font-semibold">{item.title}</div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
}

export default Home;
 */
