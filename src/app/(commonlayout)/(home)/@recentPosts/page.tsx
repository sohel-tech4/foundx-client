import Card from "@/src/components/UI/Card";
import Container from "@/src/components/UI/Container";
import { recentPost } from "@/src/services";
import { IPost } from "@/src/types";
import { Button } from "@heroui/button";
import Link from "next/link";

const recentPosts = async () => {
  const { data } = await recentPost();
  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been Recently found rported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 grid-cols-4">
        {data.map((item: IPost) => (
          <Card key={item?._id} item={item}></Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default-50" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
};

export default recentPosts;
