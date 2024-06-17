import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className=" w-full h-[20ch] bg-mainBg grid place-items-center text-2xl text-white font-bold">
        Dashboard
      </div>
      <div className=" flex w-[90%] mx-auto my-5 justify-between">
        <div className=" flex items-end gap-1">
          <span className=" text-lg">Orders</span>
          <span className=" text-sm font-medium text-gray-700 ">
            Order Length
          </span>
        </div>
        <div className="py-3 px-6 rounded-md bg-secColor text-white text-lg">
          March 1 - March 30
        </div>
      </div>
      <Table className=" w-[90%] mx-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Order</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="text-right">Date</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>
              <img
                src=""
                className="size-30 object-cover object-center"
                alt=""
              />
              <span>test product</span>
            </TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell
              className={`${
                status === "Completed " ? "bg-green-400" : "bg-red-600"
              }`}
            >
              $250.00
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="w-[90%] mx-auto">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
              <PaginationLink href="#">2</PaginationLink>
              <PaginationLink href="#">3</PaginationLink>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default AdminDashboard;
