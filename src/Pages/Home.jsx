import { Button, Form, Input } from "antd";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#C7DB9C] p-4">
      <div>
        <div className="text-4xl m-10">Book an appointment now</div>
      </div>
      <div className="flex  justify-around items-center  w-250 pt-6 mx-4 shadow-xl rounded-2xl bg-[#FFF0BD] ">
        <Form className="flex flex-row gap-4">
          <Form.Item>
            <Input
              style={{ width: "400px" }}
              size="large"
              placeholder="Name, Specialization or Facility"
              className="w-300"
            />
          </Form.Item>
          <Form.Item>
            <Input style={{ width: "400px" }} size="large" />
          </Form.Item>
          <Button>Search</Button>
        </Form>
      </div>
      <div className="black border-blackk">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
}

export default Home;
