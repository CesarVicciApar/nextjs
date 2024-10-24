import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;

  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  const fetchFilterCustomers = await fetchFilteredCustomers(query);

  return (
    <>
      <Suspense
        //si el query o el currentPage cambian, React "olvidará" el estado anterior de ese componente y lo volverá a montar como si fuera uno nuevo
        key={query} 
        fallback={<InvoicesTableSkeleton />}
      >
        <CustomersTable customers={fetchFilterCustomers} />
      </Suspense>
    </>
  );
}
