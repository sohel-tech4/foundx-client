import { Input } from "@heroui/input";
import { SearchIcon } from "../../icons";

const BannerPage = () => {
  return (
    <div className="h-screen bg-[url('../../public/banner.jpg')]  bg-cover bg-center">
      <div className="pt-32 max-w-xl flex-1 mx-auto">
        <form className="flex-1">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            labelPlacement="outside"
            placeholder="Search..."
            size="lg"
            endContent={
              <SearchIcon className="pointer-events-noe flex -shrink-0"></SearchIcon>
            }
            type="text"
          ></Input>
        </form>
      </div>
    </div>
  );
};

export default BannerPage;
