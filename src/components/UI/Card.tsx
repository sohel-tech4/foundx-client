import { Card as NextUiCard, CardHeader, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { format } from "date-fns";

const Card = ({ item }: { item: any }) => {
  const { title, category, images, city, dateFound, _id } = item || {};

  return (
    <NextUiCard isFooterBlurred className="h-[300px] w-full">
      <CardHeader className="absolute top-1 z-10 flex-col items-start">
        <p className="absolute -top-0 right-1 rounded-full bg-black px-2 text-tiny uppercase text-white/90">
          {category?.name}
        </p>
        <h4 className="mt-2 rounded bg-black/30 p-1 text-2xl font-medium text-white">
          {title}
        </h4>
      </CardHeader>

      <Image
        removeWrapper
        alt="Card example background"
        className="scale-120 z-0 h-full w-full -translate-y-6 object-cover"
        src={images}
      />
      <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
        <div>
          <p className="text-tiny text-black">{city}</p>
          <p className="text-tiny text-black">
            {dateFound}
            {format(new Date(dateFound), "dd MMMM, yyyy")}
          </p>
        </div>

        <Button
          className="bg-black text-tiny text-white"
          radius="full"
          size="sm"
        >
          Details
        </Button>
      </CardFooter>
    </NextUiCard>
  );
};

export default Card;
