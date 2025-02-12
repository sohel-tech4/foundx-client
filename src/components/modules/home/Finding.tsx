import { Button } from "@heroui/button";
import Container from "../../UI/Container";
import Link from "next/link";
import { recentPost } from "@/src/services";

const Finding = async () => {
  const { data } = await recentPost();

  console.log(data);

  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been Recently found rported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md: grid-cols-4">
        <h1>Recenlty Posts</h1>
        <div>
          {data.map((item: any) => (
            <h1 key={item.indexof}>{item?.title}</h1>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default-50" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
};

export default Finding;
