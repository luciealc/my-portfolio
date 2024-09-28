import React from "react";
import { Link } from "@react-pdf/renderer";

const DownloadMyCVButton = () => {
  return (
    <Link href="../assets/pdf/luciealoccioCV.pdf" download="luciealoccioCV.pdf">
      <button className="text-white border-2 border-white rounded-full py-2 px-6 hover:bg-white hover:text-blackish mx-4 font-light font-sans max-w-xs max-h-xs my-4 py-4">
        Download my CV here
      </button>
    </Link>
  );
};

export default DownloadMyCVButton;