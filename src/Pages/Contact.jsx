import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getFunction = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/Products");
  return data;
};
function Contact() {
  const { data } = useQuery({
    queryKey: ["id"],
    queryFn: getFunction,
  });
  return (
    <div className="flex flex-wrap gap-10 ">
      {data?.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-around mt-7 mx-8 items-center p-5 gap-2 w-60 h-80 shadow-xl"
        >
          <img src={item.image} className="h-50 w-60" alt="hello" />
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
}

export default Contact;
