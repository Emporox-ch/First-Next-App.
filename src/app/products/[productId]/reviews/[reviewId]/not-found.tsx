"use client";
import { usePathname } from "next/navigation";
import { use } from "react";
export default function NotFound(){
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    return(
        <div>
            <h2>Review not found</h2>
            <p>could not find requested resource</p>
        </div>
    )
}